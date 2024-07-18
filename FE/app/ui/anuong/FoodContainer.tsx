import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { LikeOutlined, MessageOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Image from "next/image";
import { FoodType } from "@/app/lib/types/anuong";
export default function FoodContainer({foods}: {foods: FoodType[]}) {
    return (
        <>
            {foods.map((food, index) => (
                <Card
                    key={index}
                    className="w-full h-auto"
                    cover={
                        <Image
                        width={400}
                        height={400}
                        alt="anh mon an"
                        src={food.image}
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
            ))}

        </>
    )
}