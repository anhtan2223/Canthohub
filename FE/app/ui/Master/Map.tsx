import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet';
const debounce = require('lodash/debounce');

// Import các component của Leaflet động để chỉ tải trên client-side
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const AddressSearch = () => {
    const [city, setCity] = useState('Cần Thơ');
    const [district, setDistrict] = useState('Ninh Kiều');
    const [ward, setWard] = useState('Hưng Lợi');
    const [details, setDetails] = useState('');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [L, setL] = useState(null);

    // Tạo icon sau khi component được mount (chỉ trên client-side)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            setL(L);

            // Cấu hình lại icon mặc định của Leaflet
            L.Icon.Default.mergeOptions({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                shadowSize: [41, 41]
            });
        }
    }, []);

    const fetchCoordinates = useCallback(debounce(async (address, useDefault = false) => {
        if (address.trim() || useDefault) {
            try {
                const response = await axios.get('https://nominatim.openstreetmap.org/search', {
                    params: {
                        q: address,
                        format: 'json',
                        limit: 1
                    }
                });
                if (response.data.length > 0) {
                    const result = response.data[0];
                    setLat(result.lat);
                    setLon(result.lon);
                } else if (!useDefault) {
                    fetchCoordinates(`${ward}, ${district}, ${city}`, true);
                } else {
                    setLat(null);
                    setLon(null);
                }
            } catch (error) {
                setLat(null);
                setLon(null);
            }
        }
    }, 1000), []);

    useEffect(() => {
        const address = `${details}, ${ward}, ${district}, ${city}`;
        fetchCoordinates(address);
    }, [city, district, ward, details, fetchCoordinates]);

    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setMarkers([...markers, { lat, lon: lng }]);
    };

    const handleMarkerDrag = (event) => {
        const { lat, lng } = event.target.getLatLng();
        setLat(lat);
        setLon(lng);
    };

    const MapUpdater = () => {
        const map = useMap();
        useEffect(() => {
            if (lat && lon) {
                map.setView([lat, lon], map.getZoom()); // Cập nhật vị trí trung tâm của bản đồ
            }
        }, [lat, lon, map]);

        return null;
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Thành phố"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Quận"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phường"
                value={ward}
                onChange={(e) => setWard(e.target.value)}
            />
            <input
                type="text"
                placeholder="Địa chỉ chi tiết"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
            />
            {lat && lon && (
                <div>
                    <p>Vĩ độ: {lat}</p>
                    <p>Kinh độ: {lon}</p>
                    <a href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}&zoom=18`} target="_blank" rel="noopener noreferrer">
                        Xem trên  <span className='text-green-500'>OpenStreetMap</span>
                    </a>
                    <MapContainer center={[lat, lon]} zoom={18} style={{ height: '300px', width: '50%' }} onClick={handleMapClick}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <MapUpdater />
                        <Marker
                            position={[lat, lon]}
                            draggable={true}
                            icon={L ? new L.Icon({
                                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                                shadowSize: [41, 41]
                            }) : defaultIcon}
                            eventHandlers={{ dragend: handleMarkerDrag }}
                        >
                            <Popup>
                                {details ? `${details}, ` : ''}{ward}, {district}, {city}
                            </Popup>
                        </Marker>
                        {markers.map((marker, index) => (
                            <Marker key={index} position={[marker.lat, marker.lon]} icon={L ? new L.Icon({
                                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                                shadowSize: [41, 41]
                            }) : defaultIcon}>
                                <Popup>Đánh dấu tại: {marker.lat}, {marker.lon}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default AddressSearch;