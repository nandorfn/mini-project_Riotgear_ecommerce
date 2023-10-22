import { Flex } from "@/app/components/Container/Flex";

type StatusStyles = Record<string, { className: string; text: string }>;

const statusStyles: StatusStyles = {
  Ordered: {
    className: "bg-base-100 px-4 font-medium rounded-md",
    text: "Ordered",
  },
  InProgress: {
    className: "bg-yellow-200 text-warning w-fit px-4 font-medium rounded-md",
    text: "In Progress",
  },
  Shipped: {
    className: "bg-green-200 text-green-700 w-fit px-4 font-medium rounded-md",
    text: "Shipped",
  },
  Cancelled: {
    className: "bg-red-200 text-red-700 w-fit px-4 font-medium rounded-md",
    text: "Cancelled",
  },
};

const InfoStatus = ({ status }: { status: string }) => {
  const style = statusStyles[status] || {};

  return (
    <Flex className="w-full justify-end">
      <p className={style.className}>{style.text}</p>
    </Flex>
  );
};

export default InfoStatus;
