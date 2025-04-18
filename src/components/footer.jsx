import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-300/20 backdrop-blur-lg bg-[#121212]/20 overflow-hidden text-gray-300 flex items-center justify-between px-20 hover:border-[#50C878] transition-all duration-500 ease-in-out">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide text-[#50C878]">
        
                <Image src={"/logo.png"} width={40} height={30} alt='logo' className=''/>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-xl">
        <a href="https://github.com/akashdev" target="_blank" rel="noopener noreferrer" className="hover:text-[#50C878] transition-all duration-300">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/akashdev" target="_blank" rel="noopener noreferrer" className="hover:text-[#50C878] transition-all duration-300">
          <Linkedin />
        </a>
       
        <a href="mailto:akash.dev@gmail.com" className="hover:text-[#50C878] transition-all duration-300">
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
