import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';

const options = {
  overrides: {},
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
