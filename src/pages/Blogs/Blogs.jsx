import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blogData from "./CardsData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-[#053050]">
            Our Professional Services
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover how our expert services can transform your business and help you reach new heights.
          </p>
        </motion.section>

        {/* Recent Blog Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#053050] mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <BlogPost
                id={post.id}
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                delay={index * 0.1}
                image={post.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Blog Post Card Component
const BlogPost = ({ id, title, excerpt, date, category, delay, image }) => {
  return (
    <motion.article
      className="bg-white rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="h-48 bg-gray-200">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#053050] font-medium">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-[#053050] mb-2">{title}</h3>
        <p className="text-gray-600 mb-5">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#053050] text-[#053050] rounded-md font-medium transition-all duration-300 hover:bg-[#053050] hover:text-white group"
        >
          Learn More
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPage;
