import React from 'react';
import FoodCard from './FoodCard';
const RelatedNews = () => {
    const foods = [...Array(3)].map((_, index) => ({
        image: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400",
        title: "Cơm gà Lê Trang",
        description: "Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc",
        price: "20.000 - 275.000",
        address: "Ninh Kiều, Cái Răng, Cần Thơ",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
    }));
    return (
        <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow my-10">
            <p className='font-bold text-lg mb-6'>Liên quan</p>
            <div className="grid grid-cols-3 gap-3">
                {foods.map((food, index) => (
                    <FoodCard food={food} key={index}></FoodCard>
                ))}
            </div>
        </div>
    );
}

export default RelatedNews;
