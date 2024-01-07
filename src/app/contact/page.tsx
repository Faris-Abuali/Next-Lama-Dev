// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import HydrationTest from "@/components/hydration-test";
// import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydration-test"), { ssr: false })

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  const a = Math.random();

  console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/images/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;