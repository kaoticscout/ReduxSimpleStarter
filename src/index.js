import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

YTSearch({key: process.env.YT_APIKEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// create a component
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      "videos" : [], 
      "selectedVideo" : null 
    };
    YTSearch({key: process.env.YT_APIKEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        {/* example of passing props */}
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={ this.state.videos } 
          />
      </div>
    );
  }
}

// take a component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));