import logo from "../assets/YunChat_logo.png";

function LeftSidebar({}) {
  return (
    <nav className="leftSidebar">
      <img src={logo} className="logo"></img>
      <div>Profile</div>
    </nav>
  );
}

export default LeftSidebar;
