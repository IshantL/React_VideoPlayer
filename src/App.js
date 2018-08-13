import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './Search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './Video_List';
import VideoDetail from './Video_Detail';


class App extends Component {

  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:''
    }
    this.videoSearch('Science');
  }

  videoSearch(term){
      YTSearch({key:API_KEY,term:term},(videos)=>{
      console.log(videos);
      this.setState({videos});
      this.setState({selectedVideo:videos[0]})

    })
  }
  render() {

    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div >
      <SearchBar onVideoSearch={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
