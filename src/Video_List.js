import React from 'react';
import VideoListItems from'./Video_List_Items';

const VideoList=(props)=>{
	console.log(props);
	const videos= props.videos.map((tmp,id)=>{
		return <VideoListItems videos={tmp}/>
	})
	return(
		<div className="col-md-4 list-group">
		{videos}
		</div>
		)
}
export default VideoList;