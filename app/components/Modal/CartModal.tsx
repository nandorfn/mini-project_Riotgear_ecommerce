import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Transparent } from "@/app/components/Container/Transparent";

type ModalProps = {
  id?: string;
  title: string,
  btnLeft: string,
  btnRight: string,
  children: React.ReactNode,
  modal: boolean,
  setModal: (state: boolean) => void,
  action: any,
  loading?: boolean
}

const CartModal = ({
  title,
  btnLeft,
  btnRight,
  children,
  modal,
  setModal,
  action,
  id,
  loading
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
            <Button disabled={loading} id={id} onClick={action} size={'half'} variant={'black'}>
            {loading
              ?  <span className="loading loading-spinner"></span>
              : btnLeft
            }
              
            </Button>
            <Button onClick={() => setModal(!modal)} size={'half'} variant={'white'}>{btnRight}</Button>
          </Flex>
        </Flex>
      </Transparent>
    </>
  );
};

export default CartModal;