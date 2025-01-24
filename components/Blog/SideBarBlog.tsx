import React from 'react';
import Link from '../Link';
import Image from 'next/image';

interface SinglePostProps {
    date: string;
    image: string;
    content: string;
    navLink: string;
}
interface SideBarPostProps {
    singlePost: SinglePostProps;
}
const SideBardPost: React.FC<SideBarPostProps> = ({ singlePost }) => {
    return (
        <div className="single-post">
            <div className="post-thumb">
                <Link pathname={singlePost?.navLink}><Image src={singlePost?.image} width="98" height="101" alt="" /></Link>
            </div>
            <div className="post-content">
                <span className="date">
                    <Link pathname={singlePost?.navLink}><i className="fa fa-calendar"></i>{singlePost?.date}</Link></span>
                <h6 className="title"><Link pathname={singlePost?.navLink}>{singlePost?.content}</Link></h6>
            </div>
        </div>
    )
}

export default SideBardPost;