import react from 'react'
import'../css/asd.css'

export default function Nav(){
    return(

        <nav className ="navbar">
                <div className = "navbar-container">
                    <div className = "brand">Tech Solutions</div>

                    <div id="hamburger" className = "hamburger" aria-label='Toggle menu' aria-expanded='false'>
                        <span></span>
                        <span></span>
                        <span></span>                    
                    </div>
                    <ul id='navLinks' className="nav-links" role='menu'>
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="course">Courses</a></li>
                        <li><a href="placement">Placement</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
        </nav>
    )}