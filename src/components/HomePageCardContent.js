import React from 'react';

const HomePageCardContent = ({ avatar, title, subheader, content }) => (
  <>
    <div>
      <div>
        <span>{avatar}</span>
      </div>
      <h2>{title}</h2>
      <p>{subheader}</p>
    </div>
    <div>
      <p>{content}</p>
    </div>
  </>
);

export default HomePageCardContent;
