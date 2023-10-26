import Link from "next/link";
import { Flex } from "@/app/components/Container/Flex";
import { Button } from "@/app/components/Button/Button";
import { Text } from "@/app/components/Container/Text";

type Props = {
  text: string;
  link: string;
  labelBtn: string;
}

const WrongCondition = ({text, link, labelBtn}: Props) => {
  return (
    <>
      <Flex variant={'col'} align={'center'} className="h-[60vh] gap-5">
        <Text className="text-center" fs={'xl'}>{text}</Text>
        <Link href={link}>
          <Button variant={'black'}>{labelBtn}</Button>
        </Link>
      </Flex>
    </>
  );
};

export default WrongCondition;