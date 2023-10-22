import { Flex } from "@/app/components/Container/Flex";

type StatusStyles = Record<string, { className: string; text: string }>;

const statusStyles: StatusStyles = {
  Ordered: {
    className: "bg-base-100 ",
    text: "Ordered",
  },
  InProgress: {
    className: "bg-yellow-200 text-warning ",
    text: "In Progress",
  },
  Shipped: {
    className: "bg-green-200 text-green-700 ",
    text: "Shipped",
  },
  Delivered: {
    className: "bg-blue-200 text-blue-700 ",
    text: "Delivered",
  },
  Cancelled: {
    className: "bg-red-200 text-red-700 ",
    text: "Cancelled",
  },
  Completed: {
    className: "bg-green-200 text-green-700 ",
    text: "Completed",
  },
};

const InfoStatus = ({ status }: { status: string }) => {
  const style = statusStyles[status] || {};

  return (
    <Flex className="w-full justify-end">
      <p className={` px-2 md:px-4 md:font-medium rounded-md ${style.className}`}>{style.text}</p>
    </Flex>
  );
};

export default InfoStatus;
