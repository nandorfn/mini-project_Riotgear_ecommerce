import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import Transparent from "../Container/Transparent";

type ModalProps = {
  id?: string;
  title: string,
  btnLeft: string,
  btnRight: string,
  children: React.ReactNode,
  modal: boolean,
  setModal: (state: boolean) => void,
  action: any,
}

const CartModal = ({
  title,
  btnLeft,
  btnRight,
  children,
  modal,
  setModal,
  action,
  id
}: ModalProps) => {
  return (
    <>
      <Transparent>
        <Flex variant={'col'} className="bg-white w-[39rem] p-5 rounded-lg gap-5 mx-10 md:mx-0">
          <Heading variant={'five'}>{title}</Heading>
          <Flex className="gap-1">
            {children}
          </Flex>
          <Flex variant={'row'} className="gap-5 justify-between">
              <Button id={id} onClick={action} size={'half'} variant={'black'}>{btnLeft}</Button>
            <Button onClick={() => setModal(!modal)} size={'half'} variant={'white'}>{btnRight}</Button>
          </Flex>
        </Flex>
      </Transparent>
    </>
  );
};

export default CartModal;