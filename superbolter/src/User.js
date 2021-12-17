import React from "react";


// Classes used below are from Bulma, see index.html above
class User extends React.Component {
 


  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div className="column is-3" >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={this.props.image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle">{this.props.email}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;