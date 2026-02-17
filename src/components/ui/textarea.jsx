import React from 'react';

export const Textarea = ({ className = '', ...props }) => {
  return <textarea className={className} {...props} />;
};
