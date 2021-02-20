import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Good day today!"
        image = {faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="please fight"
        image = {faker.image.image()}
        
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="You can do this"
        image = {faker.image.image()}

      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
