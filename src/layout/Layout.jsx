import React from 'react';

const Layout = (props) => {
  return <div className='max-w-[385px] mx-auto p-10'>{props.children}</div>;
};

export default Layout;
