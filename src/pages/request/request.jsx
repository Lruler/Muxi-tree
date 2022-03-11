import React, { Component } from "react";
import "./request.css";
import tallTree from "./img/tallTree.png";
import { BrowserRouter, Route, Navigate } from "react-router-dom";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: null,
      no: null
    };
  }
  
  Tyes(){
    this.setState({
      yes:1
    })
  }
  Tno(){
    this.setState({
      no:1
    })
  }

  render() {
    return (
      <div className="body-re">
        {this.state.yes && <Navigate to="/xie" replace="true" />}
        {this.state.no && <Navigate to="/" replace="true" />}
        <div className="center-re">
          <div className="text-re">是否开启此次植树（书写）之旅?</div>
          <div className="xuanze">
            <div className="yes" onClick={this.Tyes.bind(this)}>是</div>
            <div className="no" onClick={this.Tno.bind(this)}>否</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Request;
