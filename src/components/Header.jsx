import {Link as LinkScroll} from 'react-scroll'
import { useEffect, useState } from 'react';
import clsx from 'clsx';




const Header = () => {
    const [isOpen , setIsOpen] = useState(false)
    const [hasScrolled , setHasScrolled ] = useState(false)

    useEffect( () => {
        const handelScroll = ()=>{
            setHasScrolled(window.scrollY > 32  )
        }

        window.addEventListener('scroll' , handelScroll)

        return() => {
            window.removeEventListener('scroll' , handelScroll)
        }

    } , [])

    const NavLink = ({title}) => (
        <LinkScroll activeClass='nav-active' to={title} offset={-100} smooth spy onClick={()=> setIsOpen(false)} className="base-bold uppercase text-p4 transition-colors duration-500 hover:text-p1 cursor-pointer
          max-lg:my-4 max-lg:h5 ">
           {title}
        </LinkScroll>
       )

    return ( 
        <>
             <header className={clsx("fixed top-0 left-0 z-50 w-full py-10  transition-all duration-500 max-lg:py-4" , hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]")}>{/* z-50  مکان قرار گیری المنت بر روی المنت ها دیگر است هرچه عدد بیشتر باشد بالاتر قرار میگیرد */}
                <div className="container flex items-center h-14 max-lg:px-5">
                    <a href="" className="lg:hidden  flex-1 coursor-pointer z-2">
                        <img src="./images/xora.svg" alt="logo" width={115} height={55}  />
                    </a>
                    <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2', isOpen ? 'max-lg:opacity-100' : 'max-lg:opacity-0 max-lg:pointer-events-none')}>
                        <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:overflow-hidden max-lg:p-6 sidebar-before max-md:px-4 ">
                            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                                <ul className="flex max-lg:block max-lg:px-12">
                                    <li  className=' nav-li '>
                                        <NavLink  title='Features'/>
                                        <div className='dot'></div>
                                        <NavLink  title='Pricing'/>
                                    </li>

                                    <li className='nav-logo'>
                                        <LinkScroll to='Hero' offset={-250} spy smooth className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")} >
                                            <img src="./images/xora.svg" alt="logo" width={160} height={55} />
                                        </LinkScroll >
                                    </li>

                                    <li className='nav-li '>
                                        <NavLink  title="FAQ"/>
                                        <div className="dot"></div>
                                        <NavLink  title='Download'/>
                                    </li>
                                </ul>
                            </nav>
                            <div className='block absolute top-1/2 left-0 w-[960px] h-[25px] translate-x-[-110px] translate-y-1/2 rotate-90 lg:hidden'>
                                <img src="./images/bg-outlines.svg" alt="outline" width={960} height={380} className='relative z-2' />
                                <img src="./images/bg-outlines-fill.png" alt="outlinee" width={960} height={380} className='absolute inset-0 mix-blend-soft-light opacity-5'/>
                            </div>
                        </div>
                    </div>
                    <button  className=' lg:hidden z-2 size-12 border-2 border-s4/25 rounded-full flex justify-center items-center' onClick={()=> setIsOpen((prevState) => !prevState)}> 
                        <img src={`./images/${isOpen ? "close" : "magic"}.svg`} alt=""  className='size-1/2 object-contain'/>
                    </button>
                </div>
            </header>
        </>
     );
}

 
export default Header;