import { Badge, Box, Tag, Text } from "@chakra-ui/react";

interface Props {
  color: string;
  flex?: number;
  children: string;
  secondText: number | string;
  sale?: boolean;
}

const SalingTag = ({ color, children, secondText, flex, sale }: Props) => {
  return (
    <Tag
      position={"relative"}
      bg={"transparent"}
      flex={flex}
      colorScheme={"blue"}
      variant="outline"
      p={4}
    >
      <Box>
        <Text
          //   flex={1}
          flex={flex}
          mb={2}
          textTransform={"uppercase"}
          fontSize={"md"}
          color={color}
          colorScheme={"orange"}
        >
          {sale ? <s> {children}</s> : children}
          {sale && (
            <Badge
              rounded={"2xl"}
              py={1}
              color={"gray.200"}
              bg={"#24B305"}
              top={-2}
              right={"-10%"}
              position={"absolute"}
            >
              15% Off
            </Badge>
          )}
        </Text>
        <Text fontSize={"md"} color={"white"}>
          {secondText}
        </Text>
      </Box>
    </Tag>
  );
};

export default SalingTag;
