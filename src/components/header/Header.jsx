import "./header.css";
import headerImg from "../../assets/img.jpeg";
const Header = () => {
  return (
    <div className="header">
      <img src={headerImg} className="header_img" alt="" />
    </div>
  );
};

export default Header;
