import React, { Component } from "react";
import "./xie.css";
import fenge from "./img/fenge.png";
import log from "./img/log.png";
import Service from "../../common/service";
import { BrowserRouter, Route, Navigate } from "react-router-dom";

class Xie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      data: "",
    };
  }
  chagedata(e) {
    this.setState({
      data: e.target.value,
    });
  }

  tijiao() {
    let data = this.state.data;
    let token = localStorage.getItem("token");
    console.log(token)
    Service.tijiao(data, token).then((res) => {
        if(res){
            console.log(res)
        }
        this.setState({
            user:1
        })
    });
  }
  render() {
    return (
      <div className="body-x">
          {this.state.user && <Navigate to="/tree" replace="true" />}
        <div className="center-x">
          <div className="jiTime">寄信时间：2022年3月12日</div>
          <div className="jiName">寄信人：{localStorage.getItem("id")}</div>
          <div className="img-x">
            <img src={fenge} alt="分割线"></img>
          </div>
          <div>
            <textarea className="input-x" onChange={this.chagedata.bind(this)}></textarea>
            <img
              src={log}
              className="log"
              onClick={this.tijiao.bind(this)}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Xie;
