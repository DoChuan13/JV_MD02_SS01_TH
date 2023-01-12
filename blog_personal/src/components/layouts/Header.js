import React from 'react';
import { Link, NavLink } from 'react-router-dom'


function Header() {
    const activeClass = ({ isActive }) => ({
        color: isActive ? '#fff' : 'rgb(142,142,142)',
        textDecoration: isActive ? 'none' : 'underLine',
        backgroundColor: isActive ? '#9e9e9e' : 'inherit'
    })
    return (
        <div>
            <header className="site-header sticky-top py-1">
                <nav className="container d-flex flex-column flex-md-row justify-content-between">
                    <Link className="py-2" href="#" aria-label="Product" to={'/'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="d-block mx-auto"
                            role="img"
                            viewBox="0 0 24 24"
                        >
                            <title>Product</title>
                            <circle cx={12} cy={12} r={10} />
                            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
                        </svg>
                    </Link>
                    <NavLink className="py-2 d-none d-md-inline-block" to={'/'} style={activeClass}>
                        Home
                    </NavLink>
                    <NavLink className="py-2 d-none d-md-inline-block" to={'/about'} style={activeClass}>
                        About
                    </NavLink>
                    <NavLink className="py-2 d-none d-md-inline-block" to={'/user'} style={activeClass}>
                        User
                    </NavLink>
                    <NavLink className="py-2 d-none d-md-inline-block" to={'/contact'} style={activeClass}>
                        Contact
                    </NavLink>
                    {/* <NavLink className="py-2 d-none d-md-inline-block" to={'/support'} style={activeClass}>
                        Support
                    </NavLink> */}
                    {/* <NavLink className="py-2 d-none d-md-inline-block" to={'/pricing'} style={activeClass}>
                        Pricing
                    </NavLink>
                    <NavLink className="py-2 d-none d-md-inline-block" to={'/cart'} style={activeClass}>
                        Cart
                    </NavLink> */}
                </nav>
            </header>
        </div>
    )
};

export default Header
