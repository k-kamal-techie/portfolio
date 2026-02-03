import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { siteConfig } from '../../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: siteConfig.social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, url: siteConfig.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm mb-4">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary transition-colors text-xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.navigation.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-secondary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-secondary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-gray-400">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm flex items-center justify-center">
            <span>© {currentYear} {siteConfig.name}. Made with</span>
            <FaHeart className="text-red-500 mx-1" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
