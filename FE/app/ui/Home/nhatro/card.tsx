import Image from 'next/image';

export default function Card() {
    return (
        <>
            <div className="container mt-4 grid grid-cols-1 md:grid-cols-10 border border-border-color p-4 dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg gap-4">
                <div className="md:col-span-3 flex justify-center w-full">
                    <figure className="w-full max-w-[200px] max-h-[200px] overflow-hidden aspect-square rounded-lg shadow-lg relative">
                        <Image width={200} height={200} className="h-full w-full object-cover rounded-lg shadow-lg" src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp" alt="this is image" />
                        <div className="absolute bottom-2 left-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded-md">5 ảnh</div>
                    </figure>
                </div>
                <div className="md:col-span-7 flex flex-col">
                    <h3 className="text-lg font-bold uppercase mb-2">Nhà trọ SẠCH ĐẸP, 1 TRỆT 1 LẦU, ĐẦY ĐỦ TIỆN NGHI, MÁY LẠNH,... THOÁNG…</h3>
                    <div className="flex flex-col md:flex-row md:items-center mb-2">
                        <div className="flex flex-row items-center mb-2 md:mb-0">
                            <span className="text-medium-blue font-semibold text-sm md:text-base">
                                2.5 triệu/tháng
                            </span>
                            <span className="text-sm md:text-base ml-4 font-medium">
                                32m²
                            </span>
                        </div>
                        <div className="flex flex-row items-center">
                            <span className="text-sm md:text-base font-medium">
                                Quận Ninh Kiều, Cần Thơ
                            </span>
                            <span className="text-gray-500 text-xs md:text-sm ml-4">
                                Hôm nay
                            </span>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base mb-2">CHÍNH CHỦ CHO THUÊ NHÀ TRỌ MINI ĐANG TRỐNG, Ở ĐƯỢC LIỀN Địa chỉ: 44/23/16 Võ Trường Toản, Phường An Hòa, Quận Ninh Kiều, Cần Thơ- Khu vực an ninh, yên…</p>
                    <div className="flex items-center mt-2">
                        <figure className="mr-2">
                            <Image width={40} height={40} alt='test' className='rounded-full' src='https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp' />
                        </figure>
                        <div className="flex flex-row items-center">
                            <span className="text-sm md:text-base">Cô Minh Hiếu</span>
                            <span className="block h-6 w-px bg-gray-500 mx-2"></span>
                            <span className="text-sm md:text-base">Nhà trọ sinh viên Cần Thơ</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
