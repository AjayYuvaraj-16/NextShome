import React from 'react';
import Collapsible from '../Collapsible';

interface Section {
    id: number; // Unique ID for each section
    title: string;
    pathname: string;
    subsections?: Section[];
}

const sections: Section[] = [
    {
        id: 1,
        pathname: "/",
        title: 'Home',
    },
    {
        id: 4,
        pathname: "/about-us",
        title: 'About',
    },
    {
        id: 5,
        pathname: "",
        title: 'Pages',
        subsections: [
            {
                id: 6, 
                pathname: "/account",
                title: 'Account'
            },
            {
                id: 7, 
                pathname: "/login",
                title: 'Login'
            },
            {
                id: 8, pathname: "/register",
                title: 'Register'
            },
            {
                id: 9, pathname: "/page-not-found",
                title: 'Page Not Found'
            },
        ],
    },
    {
        id: 10,
        pathname: "",
        title: 'Shop',
        subsections: [
            {
                id: 11, pathname: "/shop",
                title: 'Shop 3 Column'
            },
            {
                id: 12, pathname: "/shop/column4",
                title: 'Shop 4 Column'
            },
            {
                id: 13, pathname: "/shop/left-sidebar",
                title: 'Shop Left Sidebar'
            },
            {
                id: 14, pathname: "/shop/right-sidebar",
                title: 'Shop Right Sidebar'
            },
        ],
    },
    {
        id: 15,
        pathname: "",
        title: 'Blog',
        subsections: [
            {
                id: 16, pathname: "",
                title: 'Blog Layout', subsections: [
                    {
                        id: 17, pathname: "/blog-layout",
                        title: 'Blog Grid'
                    },
                    {
                        id: 18, pathname: "/blog-layout/sidebar",
                        title: 'Blog Sidebar'
                    },
                    {
                        id: 19, pathname: "/blog-layout/blog-right-sidebar",
                        title: 'Blog Right Sidebar'
                    },
                ]
            },
            {
                id: 20, pathname: "",
                title: 'Single Blog', subsections: [
                    {
                        id: 21, pathname: "/blog",
                        title: 'Blog Details'
                    },
                    {
                        id: 22, pathname: "/blog/details-left",
                        title: 'Blog Details Sidebar'
                    },
                    {
                        id: 23, pathname: "/blog/details-right",
                        title: 'Blog Details Right Sidebar'
                    },
                ]
            },
        ],
    },
    {
        id: 24,
        pathname: "/contact-us",
        title: 'Contact',
    }
];

const MobileHeader = () => {
    return (
        <div className="mobile-menu-items">
            <ul className="nav-menu">
                {sections?.map((section) => (
                    <Collapsible key={section.id} section={section} />
                ))}
            </ul>
        </div>
    )
}

export default MobileHeader;