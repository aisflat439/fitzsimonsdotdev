import React from 'react';

const HomePageCardContent = ({ avatar, title, subheader, content }) => (
  <>
    <div>
      <div className="avatar">
        {avatar.split('').map((letter) => (
          <span>{letter}</span>
        ))}
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
