'use client'
import { useState } from "react";
import { Card, Avatar, Skeleton } from "antd";
import { EllipsisOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import {FoodType} from "@/app/lib/types/anuong/index"
import  { useRouter } from "next/navigation";
import  {truncateText}  from "@/app/lib/utils"



export default function FoodCard( { food, isAdd }: { food: FoodType, isAdd?: boolean} ) {
    let [loading, setLoading] = useState(true);
    const router = useRouter();
    const handleCardClick = (index: number) => {
        router.push(`/anuong/${index}`);
    };
    const handleActionClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const actions = [
        <LikeOutlined key="like" onClick={handleActionClick} />,
        <MessageOutlined key="message" onClick={handleActionClick} />
    ];

    if (isAdd) {
        actions.push(<EllipsisOutlined key="ellipsis" onClick={handleActionClick} />);
    }

    return (
            <Card
                loading={loading}
                className="w-full box-border h-auto"
                cover={
                    <Image
                        width={200}
                        height={200}
                        alt="anh mon an"
                        src={food.image}
                        onLoadingComplete={()=>{setLoading(false)}}
                        onError={()=>{setLoading(false)}}
                    />
                }
                onClick={() => handleCardClick(1)} style={{ cursor: 'pointer' }}
                actions={actions}
            >
                <Meta
                    title={
                    <>
                        <div className="block">
                            <h2 className="font-semibold">{food.title}</h2>
                        </div>
                    </>
                    }
                    description={
                    <>
                        <p>{truncateText(food.description, 4)}</p>
                        <span className="font-semibold">Giá: </span>
                        <span className="text-[red]">{food.price}</span>
                        <br />
                        <span className="font-semibold"> Địa chỉ tại: </span>
                        <span className="">{food.address}</span>
                    </>
                    }
                    avatar={
                    <Avatar src={food.avatar} size={50} />
                    }
                />
            </Card>
    );
};