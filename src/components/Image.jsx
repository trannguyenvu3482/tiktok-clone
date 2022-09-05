import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        className={className}
        {...props}
        style={{ overflow: 'hidden' }}
        onError={handleError}
      />
    );
  },
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
