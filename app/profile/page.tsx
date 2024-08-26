"use client";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Bromo from "@/images/Mt-Bromo-Indonesia-Intrepid.jpg";
import { useGetProfile } from "@/hooks/useProfile";

export default function Profile() {
  const { user } = useGetProfile();
  return (
    <>
      <header className="md:w-11/12 mx-auto max-w-full flex space-x-4 items-center">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
          <AvatarImage
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt="avatar-img"
          ></AvatarImage>
          <AvatarFallback>FN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg">
              <strong>{user?.name}</strong> - <span>{user?.usn}</span>
            </h1>
          </div>
          <div className="flex space-x-5 text-sm">
            <p>{dataPostFake.length} Kiriman</p>
            {/* <p>1 Pengikut</p>
            <p>1 Mengikuti</p> */}
          </div>
          <Button variant={"secondary"}>Edit Profile</Button>
        </div>
      </header>
      <section className="md:w-11/12 mx-auto border-t-2 mt-1 border-gray-300">
        <div className="grid grid-cols-3 gap-1 mt-2">
          {dataPostFake?.map(({ id, image, link }) => (
            <Link href={`${link}`} key={id}>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={image}
                  alt="Photo by Drew Beamer"
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

const dataPostFake = [
  {
    id: 1,
    image: Bromo,
    link: "/p/123",
  },
  {
    id: 2,
    image: Bromo,
    link: "/p/123",
  },
  {
    id: 3,
    image: Bromo,
    link: "/p/123",
  },
];
