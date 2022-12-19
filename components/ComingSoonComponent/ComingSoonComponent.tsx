import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import CommingSoonAnimation from "../../public/Animations/ComingSoon.json";
type Props = {};

const ComingSoonComponent = (props: Props) => {
  return (
    <Box my={5}>
      <Lottie animationData={CommingSoonAnimation} />
    </Box>
  );
};

export default ComingSoonComponent;
