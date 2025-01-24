import { useRouter } from 'next/router'
import React from 'react'

interface LinkProps {
    children?: React.ReactNode;
    pathname: string;
    className?: string;
    target?: string;
}

const Link: React.FC<LinkProps> = ({ children, pathname, className, target }) => {
    const router = useRouter();

    function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault(); // Prevent default browser navigation
        if (!pathname) {
            console.error('Pathname is undefined. Ensure you provide a valid pathname.');
            return null;
        } else {
            router.push(pathname); // Navigate to the specified path
        }
    }

    return (
        <a
            href={pathname} // Accessibility improvement
            onClick={handleClick}
            className={className}
            target={target}
        >
            {children}
        </a>
    )
}

export default Link;