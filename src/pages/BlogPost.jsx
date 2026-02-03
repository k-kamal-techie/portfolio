import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { FaClock, FaCalendar, FaArrowLeft, FaUser } from 'react-icons/fa';
import { blogPosts } from '../data/blog';
import SEO from '../components/common/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-secondary transition-colors mb-8"
            >
              <FaArrowLeft />
              Back
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mt-4 mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FaUser className="text-secondary" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-secondary" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-secondary" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-secondary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-8">
              More Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.slug !== slug && p.published)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <span className="text-xs font-medium text-secondary">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-heading font-semibold text-primary mt-2 hover:text-secondary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
