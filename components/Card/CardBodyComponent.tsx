import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

type Props = {};

const CardBodyComponent = (props: Props) => {
  return (
    <>
      <Box>
        <Text fontSize="2xl" color={"white"}>
          Product 1
        </Text>
        <Text color={"gray.200"}>Enoch Citizen</Text>
      </Box>
      <HStack>
        <Icon as={FaHeart} color="red" />
        <Text color={"white"}>32</Text>
      </HStack>
    </>
  );
};

export default CardBodyComponent;
