import { useState, FC } from 'react'
import { Link } from 'wouter'

export const Navbar: FC = ({ }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className='sticky top-0  min-h-full backdrop-blur-xl'>
            <nav className='z-1 bg-green-800'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center ">
                            <div className="flex-shrimk-0">
                                <Link to='/'>
                                    <img src="/src/img/Logo21.png"
                                        alt="" className='h-14 w-auto mr-10' />
                                </Link>


                            </div>


                            <div className="hidden md:block">
                                <div className="flex ml:-3  items-baseline space-x-1">
                                    <Link to='/' className='text-white hover:bg-green-700 px-3 py-2 rounded-md text-md font-medium'>
                                        หน้าแรก
                                    </Link>
                                    <Link to='/Animals' className='text-white hover:bg-green-700 px-3 py-2 rounded-md text-md font-medium'>
                                        สัตว์ป่า
                                    </Link>
                                    <Link to='/Natural' className='text-white hover:bg-green-700 px-3 py-2 rounded-md text-md font-medium'>
                                        พื้นที่ธรรมชาติ
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex mr-10 md:hidden">
                            <p className='text-white font-bold'>WILD ANIMALS APP</p>
                        </div>

                        <div className="mr-2 flex md:hidden">
                            <button
                                onClick={() => setShowMenu(!showMenu)}
                                className='inlaine-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none'
                                aria-controls='mobile-menu'
                                aria-expanded='false'
                            >
                                <span className='sr-only'>open main menu</span>

                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                                <svg
                                    className='hidden h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {showMenu && (
                    <div className={`flex flex-col px-2 pt-3 pb-3 space-y-1 sm:px-3 md:hidden`}>
                        <Link to='/' className='text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium'>
                            หน้าแรก
                        </Link>
                        <Link to='Animals' className='text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium'>
                            สัตว์ป่า
                        </Link>
                        <Link to='Natural' className='text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium'>
                            พื้นที่ธรรมชาติ
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar;
