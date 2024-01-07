import { LoginCredentials } from "@/types";
import { connectToDb } from "./utils";
import { User } from "../db/models";
import bcrypt from "bcryptjs";

const login = async (credentials: LoginCredentials) => {
    try {
        connectToDb();
        const user = await User.findOne({ username: credentials.username });

        if (!user) throw new Error("Wrong credentials!");

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password!
        );

        if (!isPasswordCorrect) throw new Error("Wrong credentials!");

        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};

export default login;