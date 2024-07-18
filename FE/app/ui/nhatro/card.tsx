import Image from 'next/image';
export default function Card() {
    return (
      <>
        <div className="container mt-4 grid grid-cols-10 border border-border-color p-4 rounded-lg">
            <div className="col-span-3 w-full bg-white rounded m-auto">
                <figure className="w-full overflow-hidden aspect-square rounded-lg shadow-lg relative">
                    <Image width={200} height={40} className="h-full w-full rounded-lg shadow-lg aspect-square" src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp" alt="this is image" />
                    <div className="absolute bottom-2 left-4 text-white text-xs bg-translucent-black px-2 py-1 rounded-md">5 ảnh</div>
                </figure>
            </div>
            <div className="col-span-7 ml-3">
                <h3 className="text-lg font-bold uppercase">nhà trọ SẠCH ĐẸP, 1 TRỆT 1 LẦU, ĐẦY ĐỦ TIỆN NGHI, MÁY LẠNH,... THOÁNG…</h3>
                <div className="flex justify-between items-center">
                    <div className="my-2">
                        <span className="text-medium-blue font-semibold">2.5 triệu/tháng</span>
                        <span className="ml-4 font-medium">32m²</span>
                        <span className="ml-4 font-medium">Quận Ninh Kiều, Cần Thơ</span>
                    </div>
                    <div>
                        <span className=" text-gray-500 font-[12px]">Hôm nay</span>
                    </div>
                </div>
                <p className="text-gray-500">CHÍNH CHỦ CHO THUÊ NHÀ TRỌ MINI ĐANG TRỐNG, Ở ĐƯỢC LIỀN Địa chỉ: 44/23/16 Võ Trường Toản, Phường An Hòa, Quận Ninh Kiều, Cần Thơ- Khu vực an ninh, yên…</p>
                <div className="flex items-center">
                    <figure className="mr-2 max-w-full">
                        <Image width={40} height={40} alt='test' className='rounded-full aspect-square w-full h-full' src={'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp'}/>
                    </figure>
                    <span>Cô Minh Hiếu</span>
                    <span className="block h-6 w-px bg-gray-500 mx-2"></span>
                    <span>Nhà trọ sinh viên Cần Thơ</span>
                </div>
            </div>
        </div>
      </>
    );
  }