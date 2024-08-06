import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useMap, useMapEvents } from 'react-leaflet';
const debounce = require('lodash/debounce');

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface AddressSearchProps {
    city: string;
    district: string;
    ward: string;
    details: string;
}

const AddressSearch: React.FC<AddressSearchProps> = ({ city, district, ward, details }) => {
    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);
    const [markers, setMarkers] = useState<{ lat: number; lon: number }[]>([]);
    const [L, setL] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            setL(L);

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

    const fetchCoordinates = useCallback(debounce(async (address: string, useDefault: boolean = false) => {
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
                    setLat(parseFloat(result.lat));
                    setLon(parseFloat(result.lon));
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

    const handleMapClick = (e: any) => {
        const { lat, lng } = e.latlng;
        setMarkers([...markers, { lat, lon: lng }]);
    };

    const handleMarkerDrag = (event: any) => {
        const { lat, lng } = event.target.getLatLng();
        setLat(lat);
        setLon(lng);
    };

    const MapUpdater = () => {
        const map = useMap();
        useMapEvents({
            click: handleMapClick,
        });

        useEffect(() => {
            if (lat && lon) {
                map.setView([lat, lon], map.getZoom());
            }
        }, [lat, lon, map]);

        return null;
    };

    const defaultIcon = L ? new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
    }) : null;

    return (
        <div>
            {lat && lon && (
                <div>
                    <MapContainer center={[lat, lon]} zoom={18} style={{ height: '400px', width: '100%', zIndex: 0 }}>
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
                        {/* {markers.map((marker, index) => (
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
                        ))} */}
                    </MapContainer>
                    {/* <p>Vĩ độ: {lat}</p>
                    <p>Kinh độ: {lon}</p> */}
                    Xem trên <a href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}&zoom=18`} target="_blank" rel="noopener noreferrer">
                        <span className='text-green-500'>OpenStreetMap</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default AddressSearch;