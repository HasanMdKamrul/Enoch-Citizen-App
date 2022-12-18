import { Box, Card, Flex, useDisclosure, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
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
    image: any;
    likes: number;
    countDownStartTime?: string;
  };
}

const CardComponent = ({ item }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleClick: () => any;

  handleClick = (): void => {
    onOpen();
    console.log("clicked");
  };

  const { author, biding, image, likes, price, title, countDownStartTime } =
    item;

  return (
    <Flex justify={"center"}>
      <Card maxW={"sm"}>
        <Box
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
              <SalingTag sale={true} secondText={`$${price}`} color={"orange"}>
                {`$${price}`}
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
      <GenericModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default CardComponent;
