import React from 'react'

import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from 'react-router-dom';

export function AppFooter() {
    return (
        <Footer container className='px-24'>
            <FooterCopyright by="Mohamed Bahaa™" year={2025} />
            <FooterLinkGroup>
                <FooterLink as={Link} to='/'>Home</FooterLink>
                <FooterLink as={Link} to='profile'>Profile</FooterLink>
                <FooterLink as={Link} to='login'>Login</FooterLink>
            </FooterLinkGroup>
        </Footer>
    );
}
