import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";


type Props = {
  handleUpdateStatus: (e: React.SyntheticEvent) => void;
  status: string;
}

const StatusBtn = ({ status, handleUpdateStatus }: Props) => {
  let buttonContent = null;

  switch (status) {
    case 'Ordered':
      buttonContent = (
      <>
        <Button value={'Cancelled'} onClick={handleUpdateStatus} variant={'red'} size="sm">
          Cancel
        </Button>
        <Button value={'InProgress'} onClick={handleUpdateStatus} variant={'success'} size="sm">
          Confirm
        </Button>
      </>
      );
      break;
    case 'InProgress':
      buttonContent = (
        <Button value={'Shipped'} onClick={handleUpdateStatus} clr={'blue'} size="sm">
          Mark as Shipped
        </Button>
      );
      break;
    case 'Shipped':
      buttonContent = (
        <Button  size="sm" className=" disabled:bg-blue-400 disabled:text-blue-700 disabled:font-medium" disabled>
          Delivering...
        </Button>
      );
      break;
    case 'Delivered':
      buttonContent = (
        <Button value={'Completed'} onClick={handleUpdateStatus} variant={'success'} size="sm" >
          Mark as Completed
        </Button>
      );
      break;
  }

  return (
    <Flex className="absolute z-10 gap-5 bottom-0 justify-end">
      {buttonContent}
    </Flex>
  );
};

export default StatusBtn;
