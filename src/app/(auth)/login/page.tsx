import LoginForm from "@/components/login-form";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import { auth } from "@/lib/auth";

const LoginPage = async () => {

  const session = await auth()
  console.log(session)
  // {
  //   user: {
  //     name: 'Faris Abuali',
  //     email: 'faris.abuali@outlook.com',
  //     image: 'https://avatars.githubusercontent.com/u/54215462?v=4',
  //     id: '54215462'
  //   },
  //   expires: '2024-02-06T01:24:45.838Z'
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage
