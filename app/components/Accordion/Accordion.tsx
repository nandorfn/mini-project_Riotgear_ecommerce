interface AccordionProps {
  label: string;
  content?: string;
}

const Accordion: React.FC<AccordionProps> = ({label, content}) => {
    return (
        <>
          <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title md:text-xl font-medium">
          {label}
          </div>
          <div className="collapse-content">
            <p>{content}</p>
          </div>
        </div>
        </>
    );
};

export default Accordion;