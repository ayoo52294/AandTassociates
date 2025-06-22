import './Fixed-Navbar.css';
import './Header.js'
import image from '../assets/Yellow and Black Modern Media Logo (1).png';
function Header() {


    return (
        <>

             <header className="header">
                <div className="relative flex h-14 items-center justify-between gap-3   px-3 before:pointer-events-none overflow-y-hidden">

                    <div className="flex flex-1 items-center logo-container" >
                        <a href="#" className="inline-flex shrink-0" aria-label="Cruip">
                            <img 
                            src = {image}
                            alt="A&T Logo" width={130} height={100} />
                        </a>
                    </div>

                </div>
                
                <nav className="navbar">
                    <ul className="flex flex-1 items-center justify-end gap-3" >

                        <a href='#contact'
                            className=" btn bg-[length:200%_auto]"
                        >

                            Contact us

                        </a>

                        
                    </ul>
                    
                </nav>
            </header> 
        </>
    );

}

export default Header;

