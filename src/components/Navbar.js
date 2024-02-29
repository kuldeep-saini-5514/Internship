import * as React from "react";
import { Link } from "react-router-dom";

function NavigationLink({ children, href = "#" }) {
    return (
      <a href={href} className="grow cursor-pointer" tabIndex="0">
        {children}
      </a>
    );
  }

function Navbar() {
  const navLinks = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Therapists", href: "#" },
    { name: "Resources", href: "#" },
    { name: "FAQ", href: "./FAQs" },
  ];

  return (
    <header className="flex flex-col justify-center px-16 py-6 text-2xl font-bold text-white whitespace-nowrap bg-cyan-600 max-md:px-5">
      <nav className="flex gap-8 justify-between items-center mr-4 ml-5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <a href="/" className="self-start max-w-full aspect-[5.88] w-[218px] transition-transform transform hover:scale-105">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb58034307f07517c9e0c497e461fc4e31eb7bf01576cfcb2c328b28bd1eb1d?apiKey=cf8fdc45d1bf4d769195b26a1a492d1c&"
            alt="Company Logo"
          />
        </a>
        <div className="flex gap-8 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          {navLinks.map((link) => (
             <NavigationLink href={link.href} key={link.name}>
             {link.name}
           </NavigationLink>
          ))}
          <button className="justify-center self-stretch px-4 py-2 text-lg text-black bg-yellow-300 rounded-lg transition-colors hover:bg-yellow-400 hover:scale-105" tabIndex="0">
            Login/Signup
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
