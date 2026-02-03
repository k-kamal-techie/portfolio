const Card = ({ children, className = '', hover = false }) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
