import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img src={props.logo} alt="" />
    </div>
  );
};

export default Header;
