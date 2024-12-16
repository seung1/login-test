import Link from "next/link";
import styles from "../page.module.css";

export default function Login() {
  // 로그인을 했는데 로그인 페이지로 접근하게 되면 -> 메인 페이지로 이동

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/">메인 페이지로 이동</Link>

        <h3>로그인 페이지</h3>
        <p>로그인 페이지입니다.</p>
      </main>
    </div>
  );
}
