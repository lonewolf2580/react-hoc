import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque hic
        voluptas, aliquam a deserunt unde eligendi iure recusandae, quibusdam
        maiores atque optio. Sapiente fuga placeat in, inventore ex recusandae
        saepe?
      </p>
    </div>
  );
};

export default Rainbow(About);
