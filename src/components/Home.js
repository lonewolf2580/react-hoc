import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque hic
          voluptas, aliquam a deserunt unde eligendi iure recusandae, quibusdam
          maiores atque optio. Sapiente fuga placeat in, inventore ex recusandae
          saepe?
        </p>
      </div>
    );
  }
}

export default Home;
