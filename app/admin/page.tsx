import LayoutAdmin from "./layout";

const page: React.FC = () => {
  return (
    <>
      <section className="mt-8 flex flex-col gap-4">
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
        
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;