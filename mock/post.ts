import Bromo from "@/images/Mt-Bromo-Indonesia-Intrepid.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const dataDummyPost: {
  id: string;
  username: string;
  description: string;
  image: string | StaticImport;
}[] = [
  {
    id: "1",
    username: "fjrrhn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: Bromo,
  },
  {
    id: "2",
    username: "fjrrhn",
    description: "P info bromo lek",
    image: Bromo,
  },
];
