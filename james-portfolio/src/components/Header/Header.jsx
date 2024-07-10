import { GiSpikedDragonHead } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex py-4 w-screen px-20 justify-between items-center text-lg font-medium">
        <div className="flex items-center gap-2">
            <span><GiSpikedDragonHead /></span>
            <span>Portfolio</span>
        </div>
        <ul className="flex gap-5 cursor-pointer">
            <li>Projects</li>
            <li>Technologies</li>
            <li>About</li>
        </ul>

        <ul className="flex gap-10 cursor-pointer">
            <li><FaGithub/></li>
            <li><FaLinkedin/></li>
            <li><FaInstagram/></li>
        </ul>
        
    </div>
  )
}

export default Header
