import Image from 'next/image';
import arrowDown from '../../assets/icon/arrow-down.svg'
import { Heading } from '../Container/Heading';

interface AccordionProps {
  label: string;
  content?: string;
}

const Accordion: React.FC<AccordionProps> = ({ label, content }) => {
  return (
    <>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title px-0 text-base md:text-xl font-medium flex justify-between">
          <Heading variant={'five'}>{label}</Heading>
          <Image 
            className='me-4 '
            width={20}
            height={20}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        <div className="collapse-content px-0">
          {content &&
            <p className='truncate whitespace-normal text-base-300'
              dangerouslySetInnerHTML=
              {{
                __html: content?.replace(/\n/g, "<br>")
              }} />
          }
        </div>
      </div>
    </>
  );
};

export default Accordion;