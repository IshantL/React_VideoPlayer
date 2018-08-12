import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './Video_List';
import YTSearch from 'youtube-api-search';
import VideoDetail from './Video_Detail';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:''
    }
    YTSearch({key:API_KEY,term:'Bahubali'},(videos)=>{
      console.log(videos);
      this.setState({videos});
      this.setState({selectedVideo:videos[0]})
      console.log("videos"+this.state.videos);
    })
  }
  render() {
    return (
      <div >
      <VideoDetail video={this.state.selectedVideo}/>

      <VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}

        videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
