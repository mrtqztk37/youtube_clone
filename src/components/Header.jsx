import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="w-12" src="/youtube.png" />
        <h1 className="text-2xl max-sm:hidden">Youtube</h1>
      </Link>

      <>
        <div className="flex items-center gap-2 cursor-pointer">
          <form
            onSubmit={handleSubmit}
            className="flex  items-center border border-gray-400 rounded-[20px]"
          >
            <input
              placeholder="Ara"
              className="bg-black outline-none rounded-[20px] px-3 py-1"
              type="text"
            />
            <button className="border-l px-2">
              <IoSearch />
            </button>
          </form>
          <span>
            <i>
              <FaMicrophone className="hover:text-gray-400" />
            </i>
          </span>
        </div>
      </>

      <div className="flex gap-3 text-xl cursor-pointer  items-center">
        <i>
          <AiFillBell className="hover:text-gray-400" />
        </i>
        <i>
          <AiFillVideoCamera className="hover:text-gray-400" />
        </i>
        <i>
          <img
            className="cursor-pointer rounded-full w-8 h-8 items-center"
            src="/img.jpg"
            alt="logo"
          />
        </i>
      </div>
    </header>
  );
};

export default Header;
