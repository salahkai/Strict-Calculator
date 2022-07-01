import React, { Component } from "react";
class Settings extends Component {
  render() {
    const settings = {
      theme: [[{ buttons: "" }], [{ buttons: "rounded-pill" }]],
      colors: [
        {
          numbers: "light",
          topSigns: "info",
          signs: "secondary",
          equalSign: "success",
        },
        {
          numbers: "primary",
          topSigns: "success",
          signs: "secondary",
          equalSign: "warning",
        },
      ],
    };
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Settings</h5>
          <h6 className="my-2 text-muted">Theme</h6>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {settings.theme.map((t) => (
              <label
                className={
                  "btn btn-primary " +
                  (t[0].buttons === this.props.theme ? "active" : " ")
                }
                onClick={() => this.props.onThemeChange(t[0].buttons)}
              >
                <input type="radio"></input>
                Theme {settings.theme.indexOf(t)}
              </label>
            ))}
          </div>
          <h6 className="my-2 text-muted">Colors</h6>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {settings.colors.map((c) => (
              <label
                className={
                  "btn btn-success " +
                  ("colors " + settings.colors.indexOf(c) == this.props.colors
                    ? "active"
                    : " ")
                }
                onClick={() =>
                  this.props.onColorsChange(
                    [c.numbers, c.topSigns, c.signs, c.equalSign],
                    "colors " + settings.colors.indexOf(c)
                  )
                }
              >
                <input type="radio"></input>
                Colors {settings.colors.indexOf(c)}
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
