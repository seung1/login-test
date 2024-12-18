"use client";

import Link from "next/link";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from "@/utils/firebase";
import { authStore } from "@/store/authStore";

export default function Login() {
  // 로그인을 했는데 로그인 페이지로 접근하게 되면 -> 메인 페이지로 이동

  const { user, setUser } = authStore();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account", // 계정 선택을 항상 강제
  });
  const auth = getAuth(app);

  const tryLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.error(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div>
      <main>
        <Link href="/">메인 페이지로 이동</Link>

        <h3>로그인 페이지</h3>
        <p>로그인 페이지입니다.</p>

        {user === null ? (
          <button
            onClick={() => {
              tryLogin();
            }}
          >
            로그인
          </button>
        ) : (
          <button
            onClick={() => {
              signOut(auth).then(() => {
                setUser(null);
              });
            }}
          >
            로그아웃
          </button>
        )}
      </main>
    </div>
  );
}
