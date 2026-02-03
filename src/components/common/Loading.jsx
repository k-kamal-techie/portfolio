const Loading = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size]} border-secondary border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
};

export default Loading;
