import React from 'react';

const generateValidChilds = (children, props ) => {
  return React.Children.map(children, (child) => {
    return ( React.isValidElement(child) ? React.cloneElement(child, { ...props }) : child );
  });
}

export { generateValidChilds };
