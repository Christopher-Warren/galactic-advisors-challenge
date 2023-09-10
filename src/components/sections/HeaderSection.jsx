import './HeaderSection.css';

const Header = () => {
  return (
    <div>
      <div className="header-info">
        <div>
          <h2 className="header-info-title">INSURANCE ASSESSMENT</h2>
          <h1 className="header-info-name">CLIENT NAME</h1>
        </div>
        <div>
          <img
            className="header-logo"
            src="/GalacticAdvisors_Logo_Full.png"
            alt=""
          />
        </div>
      </div>
      <div className="header-data">
        <div>
          <p>Conducted on:</p>
          <p>Date Accepted: </p>
          <p>Reviewer Name: </p>
        </div>
        <div>
          <p>Date</p>
          <p>Date</p>
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
