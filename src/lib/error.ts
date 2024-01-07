import { Error } from 'mongoose'

const handleMongooseError = (error: Error) => {
    if (error instanceof Error.ValidationError) {
        // Handle validation errors
        console.error('Validation Error:', error.message);
    } else if (error instanceof Error.CastError) {
        // Handle cast errors
        console.error('Cast Error:', error.message);
    } else {
        // Handle other errors
        console.error('Database Error:', error.message);
    }
}

export default handleMongooseError
