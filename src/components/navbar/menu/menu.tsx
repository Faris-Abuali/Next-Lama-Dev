"use client"
import { useState } from "react"
import NavbarLink from "../navbar-link"
import { LINKS } from "@/constants"
import styles from "./menu.module.css"
import Image from "next/image"
import LogoutButton from "../logout-button"
import { Session } from "next-auth"

interface Props {
    session: Session | null
}

const Menu = ({ session }: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const isAdmin = session?.user?.isAdmin ?? false

    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <div className={styles.container}>
            <section className={styles.links}>
                {LINKS.map((item) => (
                    <NavbarLink key={item.path} {...item} />
                ))}
                {session && isAdmin && (
                    <NavbarLink label="Admin" path="/admin" />
                )}
                {/* {session && (
                    <button className={styles.logout}>Logout</button>
                )} */}
                <LogoutButton />
                {!session && (
                    <NavbarLink label="Login" path="/login" />
                )}
                <button onClick={() => {console.log("SSSS")}}>CLICsKME</button>
            </section>
            <span className={styles.menuButton} onClick={toggleMenu}>
                <Image src="/images/menu.png" alt="Menu" width={24} height={24} />
            </span>
            {isOpen && (
                <section className={styles.mobileLinks}>
                    {LINKS.map((item) => (
                        <NavbarLink key={item.path} {...item} />
                    ))}
                    {session && isAdmin && (
                        <NavbarLink label="Admin" path="/admin" />
                    )}
                    {/* {session && (
                        <form action={handleLogout}>
                            <button className={styles.logout}>
                                Logout
                            </button>
                        </form>
                    )} */}
                    <LogoutButton />
                    {!session && (
                        <NavbarLink label="Login" path="/login" />
                    )}
                </section>
            )}
        </div>
    )
}

export default Menu
