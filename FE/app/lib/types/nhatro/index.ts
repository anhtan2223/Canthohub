import { Address } from '@type/master';

export interface RealEstateType {
    image: string;
    title: string;
    description: string;
    price: string;
    area: number;
    address: string;
    avatar: string;
}

export interface UserType {
    avatar: string;
    name: string;
}

export interface RealEstateForm {
    title: string;
    price: number;
    area: number;
    people: number;
    fblink?: string;
    address: Address;
    description: string;
    city: string;
    district: string;
    ward: string;
}

export interface OptionType {
    id: Number;
    value: string;
    label: string;
    children?: OptionType[];
}