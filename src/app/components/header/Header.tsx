import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-500 py-5 shadow-slate-500 shadow-md">
      <div
        className="
            container 
            mx-auto 
            flex 
            justify-between"
      >
        <p>
          <Link href="/" className="text-2xl text-white">
            KASSHII
          </Link>
        </p>
        <ul className="flex gap-12">
          <li>
            <Link href="/" className="hover:text-white text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white text-xl">
              About
            </Link>
          </li>
          <li>
            <Link href="/skill" className="hover:text-white text-xl">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white text-xl">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white text-xl">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
