import React,{Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={
			term:''
		}
	}

	onInputChange(term){
		this.setState({term});
		this.props.onVideoSearch(term);
	}

	render(){
		console.log(this.props.onVideoSearch);
		return(
			<div>
			<input onChange={(event)=>this.onInputChange(event.target.value)}/>

			</div>
			)
	}

}

export default SearchBar;