import Link from "next/link";
import styles from "../page.module.css";

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/">메인 페이지로 이동</Link>

        <h3>공개 페이지</h3>
        <p>누구나 접근이 가능한 페이지입니다.</p>
      </main>
    </div>
  );
}
