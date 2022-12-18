import { SimpleGrid } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import Head from "next/head";
import CardComponent from "../components/Card/Card";
import image1 from "../public/images/image1.jpg";
import image2 from "../public/images/image2.jpg";
import image3 from "../public/images/image3.jpg";

const inter = Inter({ subsets: ["latin"] });

// let cardData: {
//   id: number;
//   title: string;
//   author: string;
//   biding: boolean;
//   price: number;
//   image: StaticImageData;
//   likes: number;
// }[];

const cardData = [
  {
    id: 1,
    title: "Product 1",
    author: "Enoch Citizen",
    biding: true,
    price: 100,
    image: image1,
    likes: 32,
    countDownStartTime: "Jan 5, 2023 15:37:25",
  },
  {
    id: 2,
    title: "Product 2",
    author: "Enoch Citizen",
    biding: true,
    price: 100,
    image: image2,
    likes: 32,
    countDownStartTime: "Jan 15, 2023 15:37:25",
  },
  {
    id: 3,
    title: "Product 3",
    author: "Enoch Citizen",
    biding: false,
    price: 100,
    image: image3,
    likes: 32,
    countDownStartTime: "Jan 25, 2023 15:37:25",
  },
];

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid
        mx={{
          lg: "5%",
          md: "5%",
          sm: "5%",
        }}
        columns={{
          lg: 3,
          md: 2,
          sm: 1,
        }}
        spacing={4}
      >
        {cardData?.map((item, index) => (
          <CardComponent item={item} key={index} />
        ))}
      </SimpleGrid>
      {/* <CardComponent /> */}
    </>
  );
}
