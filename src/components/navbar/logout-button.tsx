import { handleLogout } from "@/lib/actions"
import { auth } from "@/lib/auth"
import styles from "./menu/menu.module.css"

const LogoutButton = async () => {
    const session = await auth()

    if (!session) return null

    return (
        <form action={handleLogout}>
            <button className={styles.logout}>
                Logout
            </button>
        </form>
    )
}

export default LogoutButton