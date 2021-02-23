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
import youtube from "../api/youtube"
import VideoList from "./VideoList"
class App extends React.Component {
  state = {videos:[]}

  onTermSubmit = async (term)=>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    this.setState({videos:response.data.items})
    
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
