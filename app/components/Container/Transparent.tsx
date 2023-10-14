const Transparent = ({ children }: { children: React.ReactNode }) => {


  return (
    <>
        <div className="bg-black min-h-screen w-screen overflow-hidden fixed opacity-50 start-0 top-0 z-50 flex justify-center items-center">
        </div>
        <div className="min-h-screen w-screen overflow-hidden fixed start-0 top-0 z-50 flex justify-center items-center">
          {children}
        </div>
        
    </>
  );
};

export default Transparent;