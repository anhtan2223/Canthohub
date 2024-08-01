import { Address } from '@type/master';

export interface FoodType {
    image: string;
    title: string;
    description: string;
    price: string;
    address: string;
    avatar: string;
}

export interface UserType {
    avatar: string;
    name: string;
}

export interface FoodFormType {
    resname: string;
    pricefrom: number;
    priceto: number;
    fblink?: string;
    address: Address;
    address1: string;
    description: string;
}

export interface OptionType {
    id: Number;
    value: string;
    label: string;
    children?: OptionType[];
}