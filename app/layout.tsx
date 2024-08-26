import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import AsideNavigationWrapper from "@/components/asidewrapper";
const fonts = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: {
    default: "SosmedInAja",
    template: "%s - SosmedInAja",
  },
  description:
    "Explore our mini social media platforms to connect with new friends, share stories, and enjoy engaging content. Join now and start sharing your experiences!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <div className="w-full mx-auto flex flex-col">
          <Header />
          <main className="top-16 relative w-full mx-auto flex items-start bg-slate-50">
            <AsideNavigationWrapper>{children}</AsideNavigationWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
