"use client";

import { login } from "@/lib/actions";
import styles from "./login-form.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

export interface LoginFormState {
    error: any;
}

const initialState: LoginFormState = {
    error: null,
}

const LoginForm = () => {
    const [state, formAction] = useFormState(login, initialState);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {state?.error}
            <Link href="/register">
                {"Don't have an account?"} <b>Register</b>
            </Link>
        </form>
    );
};

export default LoginForm;