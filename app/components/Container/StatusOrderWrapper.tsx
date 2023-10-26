import { statusOptions } from "@/app/helpers/dataObject";
import Link from "next/link";
import { Button } from "@/app/components/Button/Button";

const StatusOrderWrapper = ({status}: {status?: string | string[]}) => {
  return (
    <>
      {statusOptions.map((option) => (
        <Link href={`?status=${option.value}`} key={option.value}>
          <Button
            variant={'link'}
            className={status === option.value ? 'border-success text-success' : ''}
          >
            {option.label}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default StatusOrderWrapper;