import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from "../../public/assets/Menu.svg"

const navLinks =[
    {name:"Features"},
    {name:"Pricing"},
    {name:"Enterprise"},
    {name:"Careers"},
];

export function Navbar(){
    return(
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-[20px]">
        <div className="flex items-center">
            <Image src={Logo} alt="logo" />
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {navLinks.map((items,index)=>(
                    <p className="text-[#36485C] font-medium" key={index}>{items.name}</p>

                ))}
            </div>
        </div>
        <div className="flex gap-x-5 items-center">
            <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] ">Open an Account</p>
            <div className="flex items-center gap-x-2">
                <Image src={User}  alt="User"/>
                <span className="hidden lg:block font-medium text-[#36485C]">Sign in</span>
            </div>
            <Image src={Menu} alt="Menu button" className="lg:hidden"/>
        </div>


    </nav>
    )
}