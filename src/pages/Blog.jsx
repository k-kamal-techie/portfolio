import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaArrowRight } from 'react-icons/fa';
import { blogPosts } from '../data/blog';
import SEO from '../components/common/SEO';

const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <FaClock />
          {post.readTime}
        </span>
      </div>

      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-xl font-heading font-semibold text-primary mb-3 hover:text-secondary transition-colors">
          {post.title}
        </h2>
      </Link>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
        >
          Read More
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  </motion.article>
);

const Blog = () => {
  const publishedPosts = blogPosts.filter(post => post.published);

  return (
    <>
      <SEO
        title="Blog"
        description="Technical articles and insights by Kamal Kumar on web development, DevOps, and software engineering"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Technical articles, tutorials, and insights on software development
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {publishedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
