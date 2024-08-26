// app/profile/layout.tsx
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `Profile`,
  description:
    "Manage your profile, update your information, and showcase your best moments on our social media platforms.",
};

async function getUser() {
  const res = await fetch("/api/user");

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.user;
}

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
    return null;
  }

  return (
    <main className="w-11/12 md:w-10/12 mx-auto py-4 relative">{children}</main>
  );
}
