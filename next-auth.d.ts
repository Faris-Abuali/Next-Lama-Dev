// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            isAdmin: boolean;
        } & DefaultSession
    }

    interface User  {
        isAdmin: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: boolean;
    }
}