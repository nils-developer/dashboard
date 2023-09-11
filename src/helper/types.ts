export type Item = {
    transactionId: number,
    transactionType: string,
    amount: number,
    date: string,
    userId: number
}

export type MonthlyAmount = {
    date: Date,
    amount: number
}