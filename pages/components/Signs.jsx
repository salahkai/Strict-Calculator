import React, { Component } from "react";
class Signs extends React.Component {
  render() {
    // Signs as it will be shown in the calculator.
    const signs = [
      ["√", "^"],
      ["÷", "×"],
      ["-", "+"],
    ];
    return (
      <React.Fragment>
        <div className="row">
          <button
            onClick={() => this.props.onDelete()}
            className={
              "btn col btn-" + this.props.TopSignsColor + " " + this.props.theme
            }
          >
            ←
          </button>
          <button
            onClick={() => this.props.onClear()}
            className={
              "btn col btn-" + this.props.TopSignsColor + " " + this.props.theme
            }
          >
            C
          </button>
        </div>
        {signs.map((m) => (
          <div className="row">
            {m.map((c) => (
              <button
                type="button"
                onClick={() => this.props.onInsert(c)}
                className={
                  "btn col btn-" +
                  this.props.signsColor +
                  " " +
                  this.props.theme
                }
              >
                {c}
              </button>
            ))}
          </div>
        ))}
        <div className="row">
          <button
            onClick={() => this.props.onCalculate()}
            type="button"
            className={
              "btn col btn-" +
              this.props.equalSignColor +
              " " +
              this.props.theme
            }
          >
            =
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Signs;
