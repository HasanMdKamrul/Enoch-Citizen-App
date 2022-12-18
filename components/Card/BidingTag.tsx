import { Box, Tag, Text } from "@chakra-ui/react";
import useCountdown from "../../Hooks/useCountdown";

interface Props {
  color: string;
  flex?: number;
  children: string;
  secondText: number | string;
  timer?: boolean;
  countDownStartTime?: string | undefined;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const BidingTag = ({
  color,
  children,
  secondText,
  flex,
  timer,
  countDownStartTime,
}: Props) => {
  const { days, hours, minutes, seconds } = useCountdown(countDownStartTime!);

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
          //   flex={1}
          flex={flex}
          mb={2}
          textTransform={"uppercase"}
          fontSize={"md"}
          color={color}
          colorScheme={"orange"}
        >
          {children}
        </Text>
        <Text fontWeight={"bold"} fontSize={"md"} color={"white"}>
          {timer ? `${days} : ${hours} : ${minutes} : ${seconds}` : secondText}S
        </Text>
      </Box>
    </Tag>
  );
};

export default BidingTag;
