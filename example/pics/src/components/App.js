// import React from "react";
// import SearchBar from "./SearchBar";
// import unsplash from "../api/unsplash";
// import ImageList from "./ImageList";

// class App extends React.Component {
//   state = {images: [] };

//   onSearchSubmit = async (term) => {
//     const response = await unsplash
//       .get("/search/photos", {
//         params: { query: term }

//       })

//       this.setState({images: response.data.results});
//   }

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = ()=>{
    this.onTermSubmit('pokemon');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items,selectedVideo:response.data.items[0] });
    
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">

            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">

            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
