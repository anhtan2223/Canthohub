'use client'
import { useState } from "react";
import { Card, Avatar, Skeleton } from "antd";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import {FoodType} from "@/app/lib/types/anuong/index"
import  { useRouter } from "next/navigation";



export default function FoodCard( { food }: { food: FoodType} ) {
    let [loading, setLoading] = useState(true);
    const router = useRouter();
    const handleCardClick = (index: number) => {
        router.push(`/anuong/${index}`);
    };
    const handleActionClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (
            <Card
                loading={loading}
                className="w-full h-auto"
                cover={
                    <Image
                        width={400}
                        height={400}
                        alt="anh mon an"
                        src={food.image}
                        onLoadingComplete={()=>{setLoading(false)}}
                        onError={()=>{setLoading(false)}}
                    />
                }
                onClick={() => handleCardClick(1)} style={{ cursor: 'pointer' }}
                actions={[
                    <LikeOutlined key="like" onClick={handleActionClick}/>,
                    <MessageOutlined key="message" onClick={handleActionClick}/>,
                ]}
            >
                <Meta
                    title={
                    <>
                        <p className="text-[#000] font-semibold">{food.title}</p>
                    </>
                    }
                    description={
                    <>
                        <p>{food.description}</p>
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