import React, { Component } from "react";
import "./tree.css";
class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <div className="body-t">
          <div className="text-t">小树正在成长中，来年在来看它吧</div>
        </div>
      </div>
    );
  }
}
export default Tree;
