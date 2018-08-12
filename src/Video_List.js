import React, { Component } from 'react';
import VideoListItem from './Video_List_Items';

class VideoList extends Component {


  render() {
        const videoItems = this.props.videos.map((video)=>{
      return <VideoListItem video={video} key={video.etag} onVideoClick={this.props.onVideoSelect}/>
    });
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

export default VideoList;
