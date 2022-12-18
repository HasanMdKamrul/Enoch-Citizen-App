import { Box, Card, Flex, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import HeaderTag from "../HeaderTag/HeaderTag";
import BidingTag from "./BidingTag";
import CardBodyComponent from "./CardBodyComponent";
import CardButton from "./CardButton";
import SalingTag from "./SalingTag";

interface Props {
  item: {
    id: number;
    title: string;
    author: string;
    biding: boolean;
    price: number;
    image: any;
    likes: number;
  };
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CardComponent = ({ item, days, hours, minutes, seconds }: Props) => {
  console.log(item);

  const { author, biding, image, likes, price, title } = item;

  return (
    <Flex justify={"center"}>
      <Card maxW={"sm"}>
        <Box
          bg="#0C2236"
          my={12}
          p={5}
          border="1px solid black"
          //   maxW="315px"
          //   maxH="545px"
          borderRadius="lg"
        >
          <Flex align="center" justify="space-between" gap="5">
            <HeaderTag colorScheme="gray" variant="outline">
              Hot Deal
            </HeaderTag>
            {biding ? (
              <HeaderTag colorScheme="orange" variant="outline">
                Action
              </HeaderTag>
            ) : (
              <HeaderTag colorScheme="blue" variant="outline">
                Sale
              </HeaderTag>
            )}
          </Flex>
          {/* ** Image */}
          <Box my={5} rounded={"lg"} overflow="hidden">
            <Image layout="responsive" src={image} alt="" />
          </Box>
          {/* ** body */}
          <Flex justify={"space-between"}>
            <CardBodyComponent title={title} author={author} likes={likes} />
          </Flex>
          {/* ** Countdown */}
          {biding && (
            <Flex mt={4} gap={3}>
              <BidingTag secondText={`$${price}`} color={"orange"}>
                Highest Bid
              </BidingTag>
              <BidingTag
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                timer={true}
                secondText={"03 : 18 : 24 : 42s"}
                flex={1}
                color={"gray.200"}
              >
                AUCTION ENDS IN
              </BidingTag>
            </Flex>
          )}
          {/* Sale Tags */}

          {!biding && (
            <Flex mt={4} gap={3}>
              <SalingTag sale={true} secondText={`$${price}`} color={"orange"}>
                {`$${price}`}
              </SalingTag>
              <SalingTag
                secondText={"03 : 18 : 24 : 42s"}
                flex={1}
                color={"gray.200"}
              >
                Flash Deal ends in
              </SalingTag>
            </Flex>
          )}
          {/* ** Button */}
          {biding && (
            <WrapItem my={4} gap={2}>
              <CardButton
                width={"full"}
                varient={"solid"}
                colorScheme={"messenger"}
              >
                Bid Now
              </CardButton>
            </WrapItem>
          )}
          {/* <WrapItem my={4} gap={2}>
            <CardButton
              width={"full"}
              varient={"solid"}
              colorScheme={"messenger"}
            >
              Bid Now
            </CardButton>
          </WrapItem> */}
          {!biding && (
            <WrapItem my={4} gap={2}>
              <CardButton
                width={"full"}
                varient={"outline"}
                colorScheme={"whiteAlpha"}
              >
                Add to Cart
              </CardButton>
              <CardButton
                width={"full"}
                varient={"solid"}
                colorScheme={"messenger"}
              >
                Buy Now
              </CardButton>
            </WrapItem>
          )}
        </Box>
      </Card>
    </Flex>
  );
};

export default CardComponent;
