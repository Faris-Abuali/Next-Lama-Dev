"use client";

import { register } from "@/lib/actions";
import styles from "./register-form.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface RegisterFormState {
    success: boolean;
}

const initialState: RegisterFormState = {
    success: false,
}

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, initialState);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" required />
            <input type="email" placeholder="email" name="email" required />
            <input type="password" placeholder="password" name="password" required />
            <input
                type="password"
                placeholder="password again"
                name="passwordRepeat"
                required
            />
            {/* <input 
                type="file"
                name="img"
            /> */}
            <button>Register</button>
            {state?.error}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;