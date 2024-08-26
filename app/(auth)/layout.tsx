import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth to SosmedInAja",
  description:
    "Log in to your account to connect with friends and share stories on our social media platforms.",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="mx-auto max-w-[480px] space-y-6 py-12 px-4 md:px-6">
      {children}
    </section>
  );
}
