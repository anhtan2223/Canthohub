export function truncateText(text: string, wordLimit: number) {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
};

export function formatNumber(value: any) {
    if (value === undefined || value === null) return '';
    return new Intl.NumberFormat('vi-VN').format(value);
};

export function formatCurrency(value: any) {
    return value?.replace(/\./g, '')
}