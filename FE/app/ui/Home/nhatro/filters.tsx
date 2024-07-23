import { FaChevronRight } from "react-icons/fa6";
export function FilterPrice() {
    return (
      <>
        <div className="container mt-3 px-4 py-6 border border-border-color rounded-lg bg-secondary w-full rounded">
            <h2 className="font-bold text-lg">Xem theo giá</h2>
            <div className="grid grid-cols-2 mt-3 gap-4">
                <div className=" rounded">
                    <span className="flex items-center text-xs">
                        <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                    </span>
                </div>
                <div className=" rounded">
                    <span className="flex items-center text-xs">
                        <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                    </span>
                </div>
            </div>
            <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
            <div className="grid grid-cols-2 mt-3 gap-4">
                <div className=" rounded">
                    <span className="flex items-center text-xs">
                        <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                    </span>
                </div>
                <div className=" rounded">
                    <span className="flex items-center text-xs">
                        <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                    </span>
                </div>
            </div>
            <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
            <div className="grid grid-cols-2 mt-3 gap-4">
                <div className=" rounded">
                    <span className="flex items-center text-xs">
                        <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                    </span>
                </div>
                <div className=" rounded">
                    <span className="flex items-center text-xs">
                        <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                    </span>
                </div>
            </div>
            <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
        </div>
      </>
    );
}

export function FilterArea() {
    return(
        <>
            <div className="container mt-3 px-4 py-6 border border-border-color rounded-lg bg-secondary w-full rounded">
                <h2 className="font-bold text-lg">Xem diện tích </h2>
                <div className="grid grid-cols-2 mt-3 gap-4">
                    <div className=" rounded">
                        <span className="flex items-center text-xs">
                            <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                        </span>
                    </div>
                    <div className=" rounded">
                        <span className="flex items-center text-xs">
                            <FaChevronRight className="text-gray-400 mr-2" size={12}/> Từ 1 - 2 triệu
                        </span>
                    </div>
                </div>
                <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
                <div className="grid grid-cols-2 mt-3 gap-4">
                    <div className=" rounded">
                        <span className="flex items-center text-xs">
                            <FaChevronRight className="text-gray-400 mr-2" size={12}/> Từ 2 - 3 triệu
                        </span>
                    </div>
                    <div className=" rounded">
                        <span className="flex items-center text-xs">
                            <FaChevronRight className="text-gray-400 mr-2" size={12}/> Từ 3 -4 tri
                        </span>
                    </div>
                </div>
                <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
                <div className="grid grid-cols-2 mt-3 gap-4">
                    <div className=" rounded">
                        <span className="flex items-center text-xs">
                            <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                        </span>
                    </div>
                    <div className=" rounded">
                        <span className="flex items-center text-xs">
                            <FaChevronRight className="text-gray-400 mr-2" size={12}/> Dưới 1 triệu
                        </span>
                    </div>
                </div>
                <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
            </div>
        </>
    )
}

export function FilterLocation() {
    return (
        <>
            <div className="container px-4 py-6 border border-border-color rounded-lg bg-secondary w-full rounded">
                <h2 className="font-bold text-lg">Tìm trọ ở khu vực</h2>
                <div className="grid grid-cols-2 mt-3 gap-4">
                    <div className=" rounded">
                        <span className="text-dark-blue font-semibold">
                            Ninh kiều <span className="text-gray-400">(90)</span>
                        </span>
                    </div>
                    <div className=" rounded">
                        <span className="text-dark-blue font-semibold">
                            Cái Răng <span className="text-gray-400">(90)</span>
                        </span>
                    </div>
                </div>
                <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className=" rounded">
                        <span className="text-dark-blue font-semibold">
                            Bình Thủy <span className="text-gray-400">(90)</span>
                        </span>
                    </div>
                    <div className=" rounded">
                        <span className="text-dark-blue font-semibold">
                            Phong Điền <span className="text-gray-400">(90)</span>
                        </span>
                    </div>
                </div>
                <hr className="border-t-1 border-dashed border-gray-400 mt-3"></hr>
            </div>
        </>
    )
}