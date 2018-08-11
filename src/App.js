import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './Video_List';
import YTSearch from 'youtube-api-search';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      videos:[]
    }
    YTSearch({key:API_KEY,term:'Bahubali'},(videos)=>{
      console.log(videos);
      this.setState({videos});
      console.log("videos"+this.state.videos);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
