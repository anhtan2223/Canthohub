export interface Id {
    id: number
}

export interface ErrorResponse {
    code: number
    message: string
    validation_errors: any
}

export interface Response<T> {
    success: boolean
    status: number
    data?: T
    error?: ErrorResponse
}