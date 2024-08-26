"use client";
import Link from "next/link";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/lib/config";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const api = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await api.json();

    if (api.status === 200 || api.ok) {
      push("/");
    } else if (api.status === 403) {
      setErrorMessage(response?.message);
    } else if (api.status === 401) {
      setErrorMessage(response?.message);
    } else {
      window.alert("Error | Something went wrong");
    }
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">
          Enter your email and password to sign in to your account.
        </p>
      </div>
      <form onSubmit={login}>
        <Card>
          <CardContent className="space-y-4 pt-6">
            {errorMessage && (
              <p className="text-sm text-center text-red-500">{errorMessage}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={changeInputValue}
                value={data.email}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                onChange={changeInputValue}
                value={data.password}
                type="password"
                placeholder="Enter a password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium underline underline-offset-4"
          prefetch={false}
        >
          Register
        </Link>
      </div>
    </>
  );
}
