'use client'
import Breadcrumbs from "@/app/ui/breadcrums";
import { EditOutlined, EllipsisOutlined, SettingOutlined, LikeOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { Avatar, Card, Input, Pagination } from "antd";
import { MdFoodBank } from "react-icons/md";

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    
    return (
        <div className="">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="h-[60px] bg-[#ECEFF5] w-100 mb-2 flex items-center justify-between">
                <div className="flex items-center">
                    <MdFoodBank className=" text-medium-blue text-[50px] ml-4"></MdFoodBank>
                    <h2 className="font-bold text-lg ml-2">
                        Điểm ăn uống
                    </h2>
                </div>
                <div className="flex items-center">
                    <Input size="large"  className='h-[40px] mr-4' placeholder="Tìm Kiếm" suffix={<SearchOutlined/>} />
                    <div className="w-full flex justify-start items-center">
                        <span>Sắp xếp: </span>
                        <div className="">
                            <form className="max-w-sm mx-auto ml-3">
                                <select id="countries" className="custom-select">
                                    <option defaultChecked>Mặc định</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                </div>
                </div>
            </div>
            <div className="mx-auto grid grid-cols-5 gap-[10px]">
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
                <Card
                    className="w-full"
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="message" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={
                            <>
                                <div>Card Title 1</div>
                            </>
                        }
                        description="This is the description"
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    />
                </Card>
            </div>
            <Pagination
                    showSizeChanger
                    onShowSizeChange={()=>{}}
                    defaultCurrent={3}
                    total={50}
                    className="flex justify-end mt-3"
            />
        </div>
    );
}
