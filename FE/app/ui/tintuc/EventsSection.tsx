'use client';

import React from 'react';

const EventsSection = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-md overflow-hidden px-6 pt-6 pb-6">
                <div className='mb-4'>
                    <div className="relative grid grid-cols-2 rounded-md overflow-hidden">
                        <img src="/Rectangle 11.png" alt="Check-in Location 1" className="w-full h-32 object-cover col-span-1" />
                        <img src="/Rectangle 10.png" alt="Check-in Location 2" className="w-full h-32 object-cover col-span-1" />
                        <div className="relative col-span-2">
                            <img src="/Rectangle 12.png" alt="Check-in Location 3" className="w-full h-32 object-cover" />
                            <p className="absolute bottom-0 text-[14px] text-white pl-2 py-2">Những địa điểm check-in tại Cần Thơ</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative grid grid-cols-2 rounded-md overflow-hidden">
                        <img src="/Rectangle 11.png" alt="Check-in Location 1" className="w-full h-32 object-cover col-span-1" />
                        <img src="/Rectangle 10.png" alt="Check-in Location 2" className="w-full h-32 object-cover col-span-1" />
                        <div className="relative col-span-2">
                            <img src="/Rectangle 12.png" alt="Check-in Location 3" className="w-full h-32 object-cover" />
                            <p className="absolute bottom-0 text-[14px] text-white pl-2 py-2">Nhà trọ giá rẻ Cần Thơ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsSection;
