import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

interface Props {
  title: string;
  author: string;
  likes: number;
}

const CardBodyComponent = ({ title, author, likes }: Props) => {
  return (
    <>
      <Box>
        <Text fontSize="2xl" color={"white"}>
          {title}
        </Text>
        <Text color={"gray.500"}>{author}</Text>
      </Box>
      <HStack>
        <Icon as={FaHeart} color="red" />
        <Text color={"white"}>{likes}</Text>
      </HStack>
    </>
  );
};

export default CardBodyComponent;
