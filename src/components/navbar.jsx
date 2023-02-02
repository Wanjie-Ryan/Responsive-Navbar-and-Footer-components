import React, {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css';

function Navbar() {

     const navRef = useRef()

     const shownavbar = ()=>{

        navRef.current.classList.toggle('responsive_nav')
     }

     //we will toggle the responsive_nav once class is invoked.


  return (

    <>
    

        <header>

            <h3>Logo</h3>

            <nav ref ={navRef}>

                <a href='/#'>Home</a>
                <a href='/#'>My work</a>
                <a href='/#'>Blog</a>
                <a href='/#'>About</a>


                {/* //smaller screens will close the navbar with this */}
                <button  className='nav-btn nav-close-btn' onClick={shownavbar}>
                    <FaTimes/>
                </button>



            </nav>


                {/* //smaller screens will open the navigation bar with this */}

                {/* will be the default one on smaller screens */}
            <button className='nav-btn' onClick={shownavbar}>
                <FaBars/>
            </button>



        </header>
    





    



    </>


  )
}

export default Navbar