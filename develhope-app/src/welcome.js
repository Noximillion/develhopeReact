import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
          <div>
            <p>welcome, {this.props.name}</p>
          </div>
    );
  }
}