import { Home, Settings, User, Heart } from "lucide-react";
import Link from "next/link";

export default function AsideNavigation() {
  const year = new Date().getFullYear();

  return (
    <>
      <aside className="hidden md:flex min-h-screen w-60">
        <nav className="py-5 px-3 scrollbar-none fixed overflow-auto z-[1] border-r-2 min-h-screen md:w-[184px] lg:w-56 border-dark-600">
          {navigation.map(({ icon, text }, index) => (
            <Link
              href={"/"}
              className="flex items-center hover:bg-slate-100 py-3 rounded-lg"
              key={index}
            >
              <div className="ml-5 flex items-center space-x-4">
                {icon}
                <span>{text}</span>
              </div>
            </Link>
          ))}
          <div className="border-t-2 flex flex-col space-y-1 px-5 mt-4 pt-2">
            <h1 className="text-lg font-bold py-2.5">Company</h1>
            {companyLink?.map(({ text, url }, index) => (
              <Link href={`${url}`} className="text-base" key={index}>
                {text}
              </Link>
            ))}
          </div>
          <footer className="border-t-2 flex justify-end items-end p-5 mt-4">
            <span className="text-sm">
              &copy; {year} SosmedInAja. All rights reserved{" "}
            </span>
          </footer>
        </nav>
      </aside>
    </>
  );
}

const navigation = [
  {
    icon: <Home />,
    text: "Home",
  },
  {
    icon: <Heart />,
    text: "Likes",
  },
  {
    icon: <User />,
    text: "Profile",
  },
  {
    icon: <Settings />,
    text: "Setting",
  },
];

const companyLink: { text: string; url: string }[] = [
  {
    text: "About Us",
    url: "/about",
  },
  {
    text: "Contact Us",
    url: "/contact",
  },
  {
    text: "Privacy Policy",
    url: "/privacy",
  },
  {
    text: "Term & Conditions",
    url: "/tnc",
  },
];
