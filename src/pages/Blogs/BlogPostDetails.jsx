import React from "react";
import { useParams } from "react-router-dom";
import CardsData from "../Blogs/CardsData"
const BlogPostDetail = () => {
  const { id } = useParams(); // Get the blog ID from URL
  const post = CardsData.find((blog) => blog.id === parseInt(id));

  if (!post) {
    return <h2 className="text-center text-2xl mt-10">Blog Post Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        {/* <p className="text-gray-500 mt-2">{post.datePosted} | {post.category}</p> */}
        <div className="bg-gray-200 my-6">
          <div className="img h-[65vh] md:h-[95vh]">
            <img className="w-full h-full object-cover" src={post.image} alt="" />
          </div>
          <div className="detail-bar w-full p-3 md:p-4 bg-[#101828] flex items-center justify-between">
            <p className="text-[14px] md:text-[16px] text-white">{post.datePosted}</p>
            <p className="text-[14px] md:text-[16px] text-white">{post.tags[0]}</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="blog-content text-lg text-gray-700 leading-relaxed" />

      </div>
    </div>
  );
};

export default BlogPostDetail;
