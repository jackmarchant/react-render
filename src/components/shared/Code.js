import React from 'react';

const Code = props => {
  return (
    <pre
     className="container">
     {JSON.stringify(props.children, null, 2)}
    </pre>
  );
};

export default Code;