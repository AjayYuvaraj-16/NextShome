import React from 'react';
import Link from '../Link';
import Image from 'next/image';

interface BlogProps {
    imgUrl: string;
    date: string;
    author: string;
    content: string;
    navLink: string;
}

interface BlogCardProps {
    blogs: BlogProps;
}
const BlogCard: React.FC<BlogCardProps> = ({ blogs }) => {
    return (
        <div className="post-item">
            <div className="inner-content">
                <div className="thumb">
                    <Link pathname={blogs?.navLink}><Image src={blogs?.imgUrl} width="370" height="260" alt="Image-HasTech" /></Link>
                </div>
                <div className="content">
                    <div className="meta-post">
                        <ul>
                            <li className="post-date"><i className="fa fa-calendar"></i><Link pathname='/blog/column3'>{blogs?.date}</Link></li>
                            <li className="author-info"><i className="fa fa-user"></i><Link pathname='/blog/column3'>{blogs?.author}</Link></li>
                        </ul>
                    </div>
                    <h4 className="title"><Link pathname={blogs?.navLink}>{blogs?.content}</Link></h4>
                    <Link className="post-btn" pathname='/blog/column3'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;