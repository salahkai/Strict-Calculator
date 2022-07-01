import React, { Component } from "react";
import Numbers from "./Numbers";
// import ComplexeSigns from "./Signs";
import Signs from "./Signs";
import Settings from "../../utils/Settings";
import {
  checkInputString,
  deleteString,
  replaceNames,
  beforeCalculate,
} from "../../utils/Functions";

class Calculator extends React.Component {
  state = {
    previousStringEquation: "",
    stringEquation: "",
    equationResult: 0,
    settings: {
      isOpened: false,
      theme: "",
      colorsName: "colors 0",
      colors: ["light", "info", "secondary", "success"],
    },
  };

  // Delete one value.
  handleDelete = () => {
    let stringEquation = this.state.stringEquation;
    stringEquation = deleteString(stringEquation);
    this.setState({ stringEquation });
  };

  // Clear all values.
  handleAllClear = () => {
    let stringEquation = this.state.stringEquation;
    stringEquation = "";
    this.setState({ stringEquation });
  };

  // Before inserting, it will check for errors such as inserting two "x" in raw.
  handleInsert = (value) => {
    let stringEquation = this.state.stringEquation;
    if (!checkInputString(value, stringEquation)) {
      stringEquation += value;
    }
    // Insert one value to stringEquation variable.
    this.setState({ stringEquation });
  };
  handleCalculate = () => {
    const { stringEquation, equationResult } = this.state;
    let previousStringEquation = stringEquation;
    let equationResultFinal = beforeCalculate(
      stringEquation,
      replaceNames(stringEquation, equationResult)
    );
    this.setState({
      previousStringEquation: previousStringEquation + "=",
      equationResult: equationResultFinal,
      stringEquation: equationResultFinal.toString(),
    });
  };

  handleClickSettings = () => {
    const { isOpened } = this.state.settings;
    this.setState({
      settings: { ...this.state.settings, isOpened: !isOpened },
    });
  };
  handleThemeChange = (theme) => {
    this.setState({
      settings: { ...this.state.settings, theme },
    });
  };
  handlecolorsChange = (colors, colorsName) => {
    this.setState({
      settings: { ...this.state.settings, colorsName, colors },
    });
  };
  render() {
    let settingsIsOpened = this.state.settings.isOpened;
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="card">
              <div>
                <div className="card-header ">
                  <div className="row">
                    <a
                      className="col-1 "
                      href="#"
                      onClick={this.handleClickSettings}
                    >
                      &#9776;
                    </a>
                    <input
                      className="input-box col-10 "
                      type="text"
                      value={this.state.previousStringEquation}
                      placeholder="0"
                      style={{ outline: "none", textAlign: "right" }}
                    />
                    <input
                      className="input-box col-10 font-weight-bold offset-1"
                      type="text"
                      value={this.state.stringEquation}
                      placeholder="0"
                      style={{ outline: "none", textAlign: "right" }}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <Numbers
                      onInsert={this.handleInsert}
                      theme={this.state.settings.theme}
                      numbersColor={this.state.settings.colors[0]}
                    />
                  </div>
                  <div className="col">
                    <Signs
                      onCalculate={this.handleCalculate}
                      onInsert={this.handleInsert}
                      onDelete={this.handleDelete}
                      onClear={this.handleAllClear}
                      theme={this.state.settings.theme}
                      TopSignsColor={this.state.settings.colors[1]}
                      signsColor={this.state.settings.colors[2]}
                      equalSignColor={this.state.settings.colors[3]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {settingsIsOpened && (
            <Settings
              className="col-7"
              onThemeChange={this.handleThemeChange}
              onColorsChange={this.handlecolorsChange}
              theme={this.state.settings.theme}
              colors={this.state.settings.colorsName}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Calculator;
