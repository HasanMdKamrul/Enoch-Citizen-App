import { Box, Card, Flex } from "@chakra-ui/react";
import Image from "next/image";
import image from "../../public/images/mo-NKhckz9B78c-unsplash.jpg";
import HeaderTag from "../HeaderTag/HeaderTag";
import BidingTag from "./BidingTag";
import CardBodyComponent from "./CardBodyComponent";

interface Props {}

const CardComponent: (props: Props) => JSX.Element = (props: Props) => {
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
            <HeaderTag colorScheme="orange" variant="outline">
              Action
            </HeaderTag>
          </Flex>
          {/* ** Image */}
          <Box my={5} rounded={"lg"} overflow="hidden">
            <Image layout="responsive" src={image} alt="" />
          </Box>
          {/* ** body */}
          <Flex justify={"space-between"}>
            <CardBodyComponent />
          </Flex>
          {/* ** Countdown */}
          <Flex mt={4} gap={3}>
            <BidingTag secondText={260} color={"orange"}>
              Highest Bid
            </BidingTag>
            <BidingTag
              secondText={"03 : 18 : 24 : 42s"}
              flex={1}
              color={"gray.200"}
            >
              AUCTION ENDS IN
            </BidingTag>
          </Flex>
        </Box>
      </Card>
    </Flex>
  );
};

export default CardComponent;
