export * from "./validation.atd.form"

import {Address , ValidationErrors} from "@type/master"

export function truncateText(text: string, wordLimit: number) {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
};

export function getErrorMessage(error:ValidationErrors) : string[] {
    const errorList : string[] = []
    for(let i in error){
        error[i].forEach(message => {
            errorList.push(message)
        })
    }
    return errorList
}

export function formatNumber(value: any) {
    if (value === undefined || value === null) return '';
    return new Intl.NumberFormat('vi-VN').format(value);
};

export function formatCurrency(value: any) {
    return value?.replace(/\./g, '')
}
export function stringityAddress(value : Address){
    return `${value.address} , ${value.ward?.name} , ${value.district?.name} , ${value.province?.name}` 
}