import { Box, Card, Flex, useDisclosure, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import HeaderTag from "../HeaderTag/HeaderTag";
import GenericModal from "../Modal/GenericModal";
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
    image?: string | undefined;
    likes: number;
    countDownStartTime?: string;
  };
}

const CardComponent = ({ item }: Props) => {
  const { author, biding, image, likes, price, title, countDownStartTime } =
    item;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bidingPrice, setBidingPrice] = useState<number>(price);

  let handleClick: () => any;

  handleClick = (): void => {
    onOpen();
  };

  const handleCart = (): void => {
    toast.success("Added to cart");
  };
  const handleBuy = (): void => {
    toast.success("Product Purchase Successful");
  };

  return (
    <Flex justify={"center"}>
      {/* <Card maxW={"sm"}> */}
      <Card
        maxW={"md"}
        bg="#0C2236"
        my={12}
        p={5}
        border="1px solid black"
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
          <Image
            layout="responsive"
            width={500}
            height={500}
            src={image!}
            alt=""
          />
        </Box>
        {/* ** body */}
        <Flex justify={"space-between"}>
          <CardBodyComponent title={title} author={author} likes={likes} />
        </Flex>
        {/* ** Countdown */}
        {biding && (
          <Flex mt={4} gap={3}>
            <BidingTag secondText={`$${bidingPrice}`} color={"orange"}>
              Highest Bid
            </BidingTag>
            <BidingTag
              timer={true}
              countDownStartTime={countDownStartTime}
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
            <SalingTag
              sale={true}
              secondText={`$${bidingPrice - bidingPrice * 0.15}`}
              color={"orange"}
            >
              {`$${bidingPrice}`}
            </SalingTag>
            <SalingTag
              timer={true}
              countDownStartTime={countDownStartTime}
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
              handleBid={handleClick}
              width={"full"}
              varient={"solid"}
              colorScheme={"messenger"}
            >
              Bid Now
            </CardButton>
          </WrapItem>
        )}

        {!biding && (
          <WrapItem my={4} gap={2}>
            <CardButton
              handleBid={handleCart}
              width={"full"}
              varient={"outline"}
              colorScheme={"blue"}
            >
              Add to Cart
            </CardButton>
            <CardButton
              handleBid={handleBuy}
              width={"full"}
              varient={"solid"}
              colorScheme={"blue"}
            >
              Buy Now
            </CardButton>
          </WrapItem>
        )}
      </Card>
      {/* </Card> */}
      <GenericModal
        setBidingPrice={setBidingPrice}
        bidingPrice={bidingPrice}
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default CardComponent;
