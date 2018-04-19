import React, { Component } from "react";
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false}
  }
  toggleState() {
    this.setState({ isOpened: !this.state.isOpened})
  }

  render() {
    console.log("isOpened", this.state.isOpened);
    console.log('this', this);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <div>Dropdown inner text</div>
    }
    return(
      <div onClick={this.toggleState.bind(this)}>
      Its Dropdown
      {dropdownText}
      </div>
    );
  }
}

export default Dropdown;
