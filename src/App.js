import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function createMarkup(html) {
  return { __html: html }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: require('./headless/content/blog.json')
    }
  }

  render() {
    const posts = this.state.posts

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {
            posts.map((item, i) => {
              return <div>
                <h3>{item.content.en.title}</h3>
                <div dangerouslySetInnerHTML={createMarkup(item.content.en.body)}></div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
