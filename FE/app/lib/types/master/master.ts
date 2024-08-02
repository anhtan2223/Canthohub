export interface Id {
    id: number
}

export interface Response<T> {
    sucess: boolean
    status: number
    data: T
    error: {
        code: number
        message: string
        validation_errors: any
    }
}