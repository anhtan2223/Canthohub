import Image from 'next/image';
export default function News() {
    return (
      <>
        <div className="box-content container mt-3 px-4 py-6 border border-border-color rounded-lg bg-secondary w-full rounded">
            <h2 className="font-bold text-lg">Tin mới đăng </h2>
            <div className="grid grid-cols-10 mt-5">
                <div className="col-span-2 w-full bg-white rounded container">
                    <figure className="w-full shadow-lg relative">
                        <Image width={200} height={200} className="block w-full h-full rounded-lg aspect-square shadow-lg" src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp" alt="this is image" />
                    </figure>
                </div>
                <div className="col-span-8 ml-4">
                    <div className="flex flex-col justify-between h-full">
                        <h3 className="text-xs box-content font-bold uppercase">NHÀ TRỌ SẠCH ĐẸP, 1 TRỆT 1 LẦU, ĐẦY ĐỦ TIỆN NGHI, MÁY LẠNH,... THOÁNG…</h3>
                        <div className="flex justify-between items-center mb-2">
                            <div className="">
                                <span className="text-medium-blue font-semibold">2.5 triệu/tháng</span>
                            </div>
                            <div>
                                <span className=" text-gray-500 font-[12px]">Hôm nay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }