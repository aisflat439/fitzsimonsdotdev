import React from 'react';
import classNames from 'classnames';

const HomePageCardContent = ({ avatar, title, subheader, content }) => (
  <>
    <div>
      <div className="avatar">
        {avatar.split('').map((letter, index) => {
          const square = !!((Math.floor(Math.random() * 10) + 1) % 2);
          const tilt = !!((Math.floor(Math.random() * 10) + 1) % 2);
          const shadeOne = !!((Math.floor(Math.random() * 10) + 1) % 2);
          const shadeTwo = !!((Math.floor(Math.random() * 10) + 1) % 2);
          const borderOne = !!((Math.floor(Math.random() * 10) + 1) % 2);
          const borderTwo = !!((Math.floor(Math.random() * 10) + 1) % 2);
          return (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${letter}-${index}`}
              className={classNames({
                square,
                tilt,
                shadeOne,
                shadeTwo,
                borderOne,
                borderTwo,
              })}
            >
              <span>{letter}</span>
            </span>
          );
        })}
      </div>
      <h2>{title}</h2>
      <p className="subheader">{subheader}</p>
    </div>
    <div>
      <p className="content">{content}</p>
    </div>
  </>
);

export default HomePageCardContent;
