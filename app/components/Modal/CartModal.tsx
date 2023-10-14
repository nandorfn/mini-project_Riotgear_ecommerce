import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import Transparent from "../Container/Transparent";

type ModalProps = {
  title: string,
  btnLeft: string,
  btnRight: string,
  children: React.ReactNode
}

const CartModal = ({
  title,
  btnLeft,
  btnRight,
  children
}: ModalProps) => {
  return (
    <>
      <Transparent>
        <Flex variant={'col'} className="bg-white w-[39rem] p-5 rounded-lg gap-5">
          <Heading variant={'five'}>{title}</Heading>
          <Flex className="gap-1">
            {children}
          </Flex>
          <Flex variant={'row'} className="gap-5 justify-between">
            <Button size={'half'} variant={'black'}>{btnLeft}</Button>
            <Button size={'half'} variant={'white'}>{btnRight}</Button>
          </Flex>
        </Flex>
      </Transparent>
    </>
  );
};

export default CartModal;