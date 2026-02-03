import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-heading font-bold text-gray-300 mb-4">
          404
        </h1>
        <h2 className="text-4xl font-heading font-bold text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          <FaHome />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
