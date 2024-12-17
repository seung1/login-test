"use client";

import { authStore } from "@/store/authStore";
import app from "@/utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const CurrentLoginUser = () => {
  const { user, setUser } = authStore();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setUser]);

  return <div>현재 로그인중인 유저: {user?.displayName}</div>;
};

export default CurrentLoginUser;
