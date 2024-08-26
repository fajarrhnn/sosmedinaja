"use client";
import { baseUrl } from "@/lib/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  usn: string;
} | null;

export const useGetProfile = () => {
  const [user, setUser] = useState<User>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${baseUrl}/api/protected`);
      const response = await res.json();
      if (res.status === 200 || res.ok) {
        setUser({ name: response?.user?.name, usn: response?.user?.usn });
        setIsLogin(true);
      } else {
        setUser(null);
        setIsLogin(false);
      }
    };
    getUser();
  }, [router]);
  return { user, isLogin };
};
