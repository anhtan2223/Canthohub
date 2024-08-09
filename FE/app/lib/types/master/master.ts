export interface Id {
    id: number
}
export interface ValidationErrors {
    [key: string]: string[]
}

export interface ErrorResponse {
    code: number
    message: string
    validation_errors: ValidationErrors
}

export interface Response<T> {
    success: boolean
    status: number
    data?: T
    error?: ErrorResponse
}