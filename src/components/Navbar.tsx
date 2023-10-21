import { useState } from 'react'
import Logo from '../assets/Logo21.png'
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from 'wouter'
// import { Link } from 'react-router-dom';


function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);


    return (
        <nav className="sticky top-0  bg-[#3C6255] border-gray-200 ">
            <div className=" max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="h-16 w-auto" alt="Logo" />
                </Link>

                <div className="flex md:hidden">
                    <p className='text-white font-extrabold'>WILD ANIMALS APP</p>
                </div>

                <button
                    onClick={() => setShowMenu(!showMenu)}

                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2   justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#79AC78] focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <div className=" text-xl" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </button>



                <div className="hidden md:block w-auto" >
                    <ul className="font-semibold  text-lg flex flex-row p-0 mt-0 border-0   space-x-2   ">
                        <li>
                            <Link to="/" className="block py-2 px-2 text-white  rounded-lg   hover:bg-[#618264]" >
                                หน้าแรก</Link>
                        </li>
                        <li>
                            <Link to="/Animals" className="block py-2 px-2 text-white  rounded-lg hover:bg-[#618264] ">
                                สัตว์ป่า </Link>
                        </li>
                        <li>
                            <Link to="/Natural" className="block py-2 px-2 text-white  rounded-lg  hover:bg-[#618264]">
                                พื้นที่ธรรมชาติ </Link>
                        </li>
                    </ul>
                </div>

                {showMenu && (
                    <div className="block w-full md:hidden ">
                        <ul className="font-semibold p-4 md:p-0 mt-4 border-[#D0E7D2] rounded-lg bg-[#618264] flex-row md:space-x-8    ">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white  rounded-lg  hover:bg-[#3C6255] ">
                                    หน้าแรก</Link>
                            </li>
                            <li>
                                <Link to="/Animals" className="block py-2 pl-3 pr-4 text-white  rounded-lg  hover:bg-[#3C6255]">
                                    สัตว์ป่า</Link>
                            </li>
                            <li>
                                <Link to="/Natural" className="block py-2 pl-3 pr-4 text-white  rounded-lg  hover:bg-[#3C6255]">
                                    พื้นที่ธรรมชาติ</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>


    )
}

export default Navbar
