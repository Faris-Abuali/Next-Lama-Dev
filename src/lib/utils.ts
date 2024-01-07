import mongoose from "mongoose"
import { DbConnection } from "@/types";

const connection: DbConnection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_CONNECTION_STRING!);
        connection.isConnected = db.connections[0].readyState;
        console.log("Successfully connected to DB")
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
};

export const fileToBase64 = (filename: string, filepath: string) => {
    return new Promise(resolve => {
        var file = new File([filename], filepath);
        var reader = new FileReader();    // Read file content on file loaded event
        reader.onload = (event) => {
            resolve(event.target?.result);
        };        
        // Convert data to base64
        reader.readAsDataURL(file);
    });
};