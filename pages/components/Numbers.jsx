import React, { Component } from "react";
class Numbers extends React.Component {
  render() {
    // Numbers as it will be shown in the calculator.
    const numbers = [
      ["(", ")", "Ans"],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [0, ".", "π"],
    ];
    return (
      <React.Fragment>
        {numbers.map((m) => (
          <div className="row">
            {m.map((c) => (
              <button
                onClick={() => this.props.onInsert(c.toString())}
                className={
                  "btn col-3 btn-" +
                  this.props.numbersColor +
                  " " +
                  this.props.theme
                }
              >
                {c}
              </button>
            ))}
          </div>
        ))}
        <div className="row"></div>
      </React.Fragment>
    );
  }
}

export default Numbers;
