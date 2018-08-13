import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './Video_List';



class App extends Component {

  constructor(props){
    super(props);

   this.state={
      videos:[]
    }

    YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{
    this.setState({videos});
    })

   
  }
  render() {
    console.log(this.state.videos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
