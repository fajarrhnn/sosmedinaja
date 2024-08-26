import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: `Profile`,
  description:
    "Manage your profile, update your information, and showcase your best moments on our social media platforms.",
};

async function getUserData() {
  const token = cookies().get("crsftoken")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(`${baseUrl}/api/protected`, {
    headers: {
      Cookie: `crsftoken=${token}`,
    },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data;
}

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getUserData();

  if (!data?.user) {
    redirect("/login");
    return null;
  }

  return (
    <main className="w-11/12 md:w-10/12 mx-auto py-4 relative">{children}</main>
  );
}
