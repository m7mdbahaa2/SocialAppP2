import React from 'react'

import { Footer, FooterCopyright, FooterLink, FooterLinkGroup, NavbarLink } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';

export function AppFooter() {
    return (
        <Footer container className='px-24'>
            <FooterCopyright by="Mohamed Bahaa™" year={2025} />
            <FooterLinkGroup>
                <FooterLink as={Link} to='/'>Home</FooterLink>
                <FooterLink as={Link} to='profile'>Profile</FooterLink>
                <FooterLink as={Link} to='login'>Login</FooterLink>
                {/* <FooterLink as={Link} to='counter' className='bg-blue-300 px-3 py-1'>Counter</FooterLink> */}

            </FooterLinkGroup>
        </Footer>
    );
}
