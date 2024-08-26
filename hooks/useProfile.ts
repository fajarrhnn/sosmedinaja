"use client";
import { useEffect, useState } from "react";

type User = {
  name: string;
  usn: string;
};

export const useGetProfile = () => {
  const [user, setUser] = useState<User>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/user");
      const response = await res.json();
      setUser({ name: response?.user?.name, usn: response?.user?.usn });
      setIsLogin(true);
    };
    getUser();
  }, []);
  return { user, isLogin };
};
