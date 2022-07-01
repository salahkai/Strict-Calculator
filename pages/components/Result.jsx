import React, { Component } from "react";
class Result extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="result">{this.props.result}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Result;
