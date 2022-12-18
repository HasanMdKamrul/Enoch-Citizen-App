import { Button } from "@chakra-ui/react";

interface Props {
  width?: string;
  varient: string;
  colorScheme: string;
  children: string;
  handleBid?: () => void;
}

const CardButton = ({
  width,
  varient,
  colorScheme,
  children,
  handleBid,
}: Props) => {
  return (
    <Button
      onClick={handleBid}
      rounded={"none"}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      width={width}
      size={"lg"}
      variant={varient}
      colorScheme={colorScheme}
    >
      {children}
    </Button>
  );
};

export default CardButton;
