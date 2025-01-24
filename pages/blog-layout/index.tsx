import BlogCard from '@/components/Blog/BlogCard';
import { BLOG_DETAIL } from '@/json/blogJson';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const BlogGrid = () => {
    return (
        <MainLayout breadcrumb='Blog'>
            <section className="blog-area blog-inner-area">
                <div className="container">
                    <div className="row">
                        {BLOG_DETAIL.filter((_, index) => index < 6)?.map((blog, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-4">
                                    <BlogCard blogs={blog} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default BlogGrid;