import { Tag } from "@chakra-ui/react";

interface Props {
  colorScheme: string;
  variant: string;
  children: string;
}

const HeaderTag = ({ children, variant, colorScheme }: Props) => {
  return (
    <>
      <Tag bg="transparent" variant={variant} colorScheme={colorScheme}>
        {children}
      </Tag>
    </>
  );
};

export default HeaderTag;
