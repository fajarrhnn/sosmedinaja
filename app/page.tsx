import Image from "next/image";
import { Ellipsis, Heart, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { dataDummyPost } from "@/mock/post";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section className="max-w-xl w-full mx-auto min-h-screen">
        <div className="flex flex-col py-5">
          <div className="flex flex-col space-y-3">
            {dataDummyPost?.map(({ id, username, description, image }) => (
              <Card className="rounded-none shadow-none" key={id}>
                <CardHeader className="pt-6">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                          alt="avatar-img"
                        ></AvatarImage>
                        <AvatarFallback>FN</AvatarFallback>
                      </Avatar>
                      <span className="text-base">
                        <strong>{username}</strong> &#183; 1 week{" "}
                      </span>
                    </div>
                    <Button
                      size={"icon"}
                      variant={"ghost"}
                      aria-label="action-button-of-the-post"
                    >
                      <Ellipsis />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Image
                    src={image}
                    alt="bromo"
                    className="w-full h-full object-contain"
                    width={undefined}
                    height={undefined}
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col space-y-2">
                    <div className="ml-2 flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size={"icon"}
                              variant={"ghost"}
                              aria-label="like-the-post"
                            >
                              <Heart />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Like</TooltipContent>
                          <TooltipTrigger asChild>
                            <Button
                              size={"icon"}
                              variant={"ghost"}
                              aria-label="comment-the-post"
                            >
                              <MessageCircle />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Comment</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="w-full line-clamp-1 mx-2">
                      <span className="text-base">
                        <strong>{username}</strong> {description}
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
