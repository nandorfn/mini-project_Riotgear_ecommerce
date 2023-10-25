import { Flex } from "../Container/Flex";
import { Heading } from "../Container/Heading";

type ProgressProps = {
  productSubCategory: string;
  viewsCount: number;
  scaledViewsCount: number;
}[]

const Progress = ({data}: {data: ProgressProps}) => {
  const progressColor = ['progress-warning', 'progress-primary', 'progress-secondary', 'progress-error', 'progress-success'];
  const textColor = ['text-warning', 'text-primary', 'text-secondary', 'text-error', 'text-success'];

    return (
        <>
        {data.map((data: any, index: number) => (
          <Flex variant={'col'} key={index}>
            <Flex variant={'row'} align={'between'}>
              <Heading className="capitalize">{data.productSubCategory}</Heading>
              <p className={`${textColor[index]}`}>{`${data.viewsCount} views`}</p>
            </Flex>
            <progress className={`progress ${progressColor[index]}`} value={data.scaledViewsCount} max="100"></progress>
          </Flex>
        
        ))}
        </>
    );
};

export default Progress;