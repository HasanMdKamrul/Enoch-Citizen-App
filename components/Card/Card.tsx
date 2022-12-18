import { Box, Flex } from "@chakra-ui/react";
import HeaderTag from "../HeaderTag/HeaderTag";

interface Props {}

const Card: (props: Props) => JSX.Element = (props: Props) => {
  return (
    <Flex justify={"center"}>
      <Box
        my={12}
        p={5}
        border="1px solid black"
        maxW="315px"
        maxH="545px"
        borderRadius="lg"
      >
        <Flex align="center" justify="space-between" gap="5">
          <HeaderTag colorScheme="orange" variant="outline">
            Hot Deal
          </HeaderTag>
          <HeaderTag colorScheme="orange" variant="outline">
            Action
          </HeaderTag>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Card;
