import Link from "next/link"
import Links from "./menu"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth"

const Navbar = async () => {
    const session = await auth()

    return (
        <nav className={styles.container}>
            <div className="logo">
                <Link href="/" className={styles.logo}>Faris</Link>
            </div>
            <Links session={session} />
        </nav>
    )
}

export default Navbar