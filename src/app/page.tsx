import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h3>로그인 프로젝트 목표</h3>
        <ol>
          <li>소셜 로그인 구현</li>
          <li>새로고침시 로그인 유지</li>
          <li>로그아웃 구현</li>
          <li>로그인 유지 상태에서만 접근 가능한 페이지 구현</li>
          <li>
            비로그인 유저가 로그인이 필요한 페이지로 접근하면 로그인 페이지로
            이동시키기
          </li>
          <li>다른 페이지로 이동시 로그인 상태 유지</li>
          <li>현재 로그인중인지 아닌지 인식시키기</li>
        </ol>

        <Link href="/login">로그인 페이지로 이동</Link>
      </main>
    </div>
  );
}
