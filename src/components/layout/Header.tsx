import Image from "next/image";
import Link from "next/link";
import mindfireFossLogo from "../../../public/images/mindfire_foss_logo.png";

const Header = () => {
  return (
    <nav className="py-2 flex justify-between items-center sticky z-50 top-0 bg-white">
      <Link href="/">
        <Image src={mindfireFossLogo} width="140" alt="logo" />
      </Link>
      <div className="flex gap-20 items-center">
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link href="/about" className="hover:text-blue-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/github" className="hover:text-blue-200">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="text-white bg-mf-red font-medium text-base rounded-full px-5 py-2 text-center tracking-wide"
        >
          Join Us!
        </button>
      </div>
    </nav>
  );
};

export default Header;
