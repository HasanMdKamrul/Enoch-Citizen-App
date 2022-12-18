import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
  bidingPrice: number | string;
  setBidingPrice: (price: number | string) => void;
}

const GenericModal = ({
  onOpen,
  isOpen,
  onClose,
  bidingPrice,
  setBidingPrice,
}: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [newBid, setNewBid] = useState<number | string>("");

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof e.target.value);
    setNewBid(e.target.value);
  };

  const handleBid:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    if (+newBid > bidingPrice) {
      setBidingPrice(+newBid);
      toast.success("Your Bid is accepted");
      onClose();
    } else {
      toast.error("Your Bid is less than previous bid");
    }
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent bg={"#0C2236"}>
        <ModalHeader textColor={"gray.200"} textTransform={"uppercase"}>
          Be The Higgest Bidder to Buy The Product
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel textColor={"gray.200"}>
              Previous Bid ${bidingPrice}
            </FormLabel>
            <Input
              textColor={"gray.200"}
              onChange={priceHandler}
              ref={initialRef}
              placeholder="Your Amount"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleBid} colorScheme="blue" mr={3}>
            Bid
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GenericModal;
