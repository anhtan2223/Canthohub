export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE').format(amount);
};