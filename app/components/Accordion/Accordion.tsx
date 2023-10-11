interface AccordionProps {
  label: string;
  content?: string;
}

const Accordion: React.FC<AccordionProps> = ({ label, content }) => {
  return (
    <>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-base md:text-xl font-medium">
          {label}
        </div>
        <div className="collapse-content">
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