import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Avi Vov</span>
      </div>
      <div className="icons">
        <div className="notification">
          <img src="notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user"
          />
          <span>Avi</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
