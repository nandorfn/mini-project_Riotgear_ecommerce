import { Button } from "../Button/Button";
import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";
import Transparent from "../Container/Transparent";
import { useRouter } from "next/navigation";

type ModalProps = {
  title: string,
  btnLeft: string,
  btnRight: string,
  children: React.ReactNode,
  modal: boolean,
  setModal: (state: boolean) => void,
}

const CartModal = ({
  title,
  btnLeft,
  btnRight,
  children,
  modal,
  setModal
}: ModalProps) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/store/cart')
  }

  return (
    <>
      <Transparent>
        <Flex variant={'col'} className="bg-white w-[39rem] p-5 rounded-lg gap-5">
          <Heading variant={'five'}>{title}</Heading>
          <Flex className="gap-1">
            {children}
          </Flex>
          <Flex variant={'row'} className="gap-5 justify-between">
              <Button onClick={handleNavigate} size={'half'} variant={'black'}>{btnLeft}</Button>
            <Button onClick={() => setModal(!modal)} size={'half'} variant={'white'}>{btnRight}</Button>
          </Flex>
        </Flex>
      </Transparent>
    </>
  );
};

export default CartModal;