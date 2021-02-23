// import React from "react";

// class SearchBar extends React.Component {
//   state = { term: "" };
//   // constructor(){
//   //   super()
//   //   this.onFormSubmit = this.onFormSubmit.bind(this)
//   // }

//   // onInputClick(){
//   //   console.log('Input was clicked')
//   // }

//   onFormSubmit = (event)=>{
//     event.preventDefault();

//     this.props.onSubmit(this.state.term);
//   }

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={(e) => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e)=>{
    e.preventDefault();
    this.props.onTermSubmit(this.state.term)
    //make sure we call callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
