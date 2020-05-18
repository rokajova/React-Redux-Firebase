import React from "react";

function ProjectDetails(props) {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <span className="card-title">Article Title - {id}</span>
        <p>
          Nisi laborum laborum deserunt laborum pariatur Lorem. Eu velit
          pariatur laboris ullamco. Aute commodo sint duis consequat id
          adipisicing reprehenderit reprehenderit eiusmod sunt fugiat ut. Labore
          eiusmod aute nostrud qui magna in occaecat.
        </p>
        <div className="card=action grey lighten-4 grey-text">
          <div>Posted by Anon</div>
          <div>2nd November, 00:00</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
