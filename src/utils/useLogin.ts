import { authStore } from "@/store/authStore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const useLogin = () => {
  const auth = getAuth();
  const { setUser } = authStore();

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account", // 계정 선택을 항상 강제
  });

  const tryLogin = () =>
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

  return { tryLogin };
};

export default useLogin;
