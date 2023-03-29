import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-4 mb-8 bg-[#333]">
      <div className="flex flex-row justify-center items-center">
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Pokeball"
        />
        <h1 className="text-white ml-2 text-xl font-bold">PokeNext</h1>
      </div>
      <ul className="flex flex-row text-white">
        <li className="mr-4 p-1 hover:duration-700 border-b-2 border-transparent hover:border-white">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4 p-1 hover:duration-700 border-b-2 border-transparent hover:border-white">
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
