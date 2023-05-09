import banner from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

const Header = () => {
  return (
    <div>
      <div className="relative">
        <img className="h-[120px] w-full absolute -z-0 object-cover" src={banner} alt="" />
        <div className="flex items-center gap-4 relative z-0 justify-center py-4">
          <img className="w-16 h-20" src={logo} alt="" />
          <p className="text-white text-4xl lg:text-6xl">Espresso Emporium</p>
        </div>
      </div>
      <div className="bg-[url('./assets/more/3.png')] bg-no-repeat bg-cover  lg:bg-fixed">
        <div className="lg:w-4/5 2xl:w-2/3  mx-auto lg:pl-96 2xl:pl-[36rem]   flex justify-center items-center lg:h-[800px]">
          <div className="space-y-4 lg:space-y-8 px-4 py-10">
            <h2 className="text-2xl lg:text-5xl  text-white">Would you like a Cup of Delicious Coffee?</h2>
            <p className="text-xs lg:text-lg  font-sans text-white">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button type="button" className="btn text-2xl font-light bg-[#E3B577] text-gray-900 capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
