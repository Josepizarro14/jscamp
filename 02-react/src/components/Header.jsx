import React from 'react'

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <h1>DevJobs</h1>
                </div>

                <ul>
                    <li>
                        <a href="#jobs">Trabajos</a>
                    </li>
                    <li>
                        <a href="#about">Acerca</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header