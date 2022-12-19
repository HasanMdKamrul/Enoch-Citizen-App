import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import errorAnimation from "../public/Animations/ErrorAnimation.json";

interface Props {}

const ErrorPage = (props: Props) => {
  return (
    <Box>
      <Lottie animationData={errorAnimation} />
    </Box>
  );
};

export default ErrorPage;
