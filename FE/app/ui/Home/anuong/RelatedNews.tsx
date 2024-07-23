'use client';

import React from 'react';
import Meta from "antd/es/card/Meta";
import { Avatar, Card } from "antd";
import {EllipsisOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import Image from "next/image";
import { FoodType } from '@/app/lib/types/anuong';
const RelatedNews = ({foods}: {foods: FoodType[]}) => {

    return (
        <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow my-10">
            <p className='font-bold text-lg mb-6'>Liên quan</p>
            <div className="grid grid-cols-3 gap-3">
                {foods.map((card, index) => (
                        <Card
                            key={index}
                            className="w-full h-auto"
                            cover={
                                <Image
                                width={400}
                                height={400}
                                alt="anh mon an"
                                src={card.image}
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
                                    <p className="text-[#000] font-semibold">{card.title}</p>
                                </>
                                }
                                description={
                                <>
                                    <p>{card.description}</p>
                                    <span className="font-semibold">Giá: </span>
                                    <span className="text-[red]">{card.price}</span>
                                    <br />
                                    <span className="font-semibold"> Địa chỉ tại: </span>
                                    <span className="">{card.address}</span>
                                </>
                                }
                                avatar={
                                <Avatar src={card.avatar} size={50} />
                                }
                            />
                        </Card>
                ))}
            </div>
        </div>
    );
}

export default RelatedNews;
