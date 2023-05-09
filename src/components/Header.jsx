import banner from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

const Header = () => {
  return (
    <div className="relative">
      <img className="h-[120px] w-full absolute -z-0 object-cover" src={banner} alt="" />
      <div className="flex items-center gap-4 relative z-0 justify-center py-4">
        <img className="w-16 h-20" src={logo} alt="" />
        <p className="text-white text-4xl lg:text-6xl">Espresso Emporium</p>
      </div>
    </div>
  );
};

export default Header;
