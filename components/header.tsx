"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import { CircleUser, Menu } from "lucide-react";
import { useGetProfile } from "@/hooks/useProfile";

export default function Header() {
  const { isLogin, user } = useGetProfile();
  return (
    <>
      <header className="bg-white fixed w-full mx-auto top-0 h-16 flex items-center border-b-2 border-dark-600 z-50">
        <nav className="w-full mx-auto px-5 flex justify-between items-center">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="md:hidden"
            aria-label="menu-icon"
          >
            <Menu />
          </Button>
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">SosmedInAja</h1>
          </Link>
          {user && isLogin === true ? (
            <Link href={"/profile"}>
              <Avatar>
                <AvatarImage
                  src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                  alt="bromo"
                ></AvatarImage>
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button variant={"secondary"}>Login</Button>
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
