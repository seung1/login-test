import Link from "next/link";
import styles from "../page.module.css";

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/">메인 페이지로 이동</Link>

        <h3>보안 페이지</h3>
        <p>로그인이 필요한 페이지입니다.</p>
      </main>
    </div>
  );
}
