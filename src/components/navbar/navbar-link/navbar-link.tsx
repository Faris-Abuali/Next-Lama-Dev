'use client'
import { NavLink } from "@/types"
import Link from "next/link"
import styles from "./navbar-link.module.css"
import { usePathname } from "next/navigation"
import clsx from 'clsx';

const NavbarLink = ({ label, path }: NavLink) => {
    const pathName = usePathname()

    return (
        <Link
            href={path}
            className={clsx(styles.container, {
                [styles.active]: pathName === path,
            })}
        >
            {label}
        </Link>
    )
}

export default NavbarLink
