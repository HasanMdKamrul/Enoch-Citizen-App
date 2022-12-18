import { Box, Tag, Text } from "@chakra-ui/react";

interface Props {
  color: string;
  flex?: number;
  children: string;
  secondText: number | string;
}

const BidingTag = ({ color, children, secondText, flex }: Props) => {
  return (
    <Tag
      bg={"transparent"}
      flex={flex}
      colorScheme={"blue"}
      variant="outline"
      p={4}
    >
      <Box>
        <Text
          flex={1}
          //   flex={flex}
          mb={2}
          textTransform={"uppercase"}
          fontSize={"md"}
          color={color}
          colorScheme={"orange"}
        >
          {children}
        </Text>
        <Text fontSize={"md"} color={"white"}>
          ${secondText}
        </Text>
      </Box>
    </Tag>
  );
};

export default BidingTag;
