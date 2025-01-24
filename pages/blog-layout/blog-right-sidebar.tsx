import BlogCard from "@/components/Blog/BlogCard";
import SideBar from "@/components/Blog/SideBar";
import { BLOG_DETAIL } from "@/json/blogJson";
import MainLayout from "@/layouts/MainLayout";
import React from "react"

const BlogLeftSideBar = () => {
    return (
        <MainLayout breadcrumb="Blog Right Sidebar">
            <section className="blog-area blog-inner-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-8 aos-init aos-animate" data-aos="fade-left">
                            <div className="row">
                                {BLOG_DETAIL?.map((blog,index) => {
                                    return (
                                        <div key={index} className="col-md-6 col-lg-4 col-xl-6">
                                            <BlogCard blogs={blog} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-xl-4 aos-init aos-animate" data-aos="fade-right">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default BlogLeftSideBar;