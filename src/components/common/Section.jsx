const Section = ({
  children,
  className = '',
  containerClassName = '',
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
