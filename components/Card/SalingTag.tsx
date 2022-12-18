import { Badge, Box, Tag, Text } from "@chakra-ui/react";
import useCountdown from "../../Hooks/useCountdown";

interface Props {
  color: string;
  flex?: number;
  children: string;
  secondText: number | string;
  sale?: boolean;
  timer: boolean;
  countDownStartTime?: string | undefined;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SalingTag = ({
  color,
  children,
  secondText,
  flex,
  sale,
  timer,
  countDownStartTime,
}: Props) => {
  const { days, hours, minutes, seconds } = useCountdown(countDownStartTime!);

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
        <Text fontWeight={"bold"} fontSize={"md"} color={"white"}>
          {timer ? `${days} : ${hours} : ${minutes} : ${seconds}` : secondText}S
        </Text>
      </Box>
    </Tag>
  );
};

export default SalingTag;
