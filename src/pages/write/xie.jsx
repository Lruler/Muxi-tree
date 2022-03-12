import React, { Component } from "react";
import { Navigate } from "react-router";
import "./xie.css";
import log from "./img/log.png";
import Service from "../../common/service";

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
    Service.tijiao(data, token).then((res) => {
      this.setState({
        user: 1,
      });
    });
  }

  getNowTime() {
    let dateTime;
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate();
    dateTime = yy + "年" + mm + "月" + dd + "日";
    return dateTime;
  }

  render() {
    return (
      <div className="body-x">
        {this.state.user && <Navigate to="/tree" replace="true" />}
        <div className="center-x">
          <div className="jiTime">寄信时间:{this.getNowTime()}</div>
          <div className="jiName">寄信人：{localStorage.getItem("id")}</div>
          <div className="div-ct">
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
            <div className="div"></div>
          </div>
          <textarea
            className="input-x"
            onChange={this.chagedata.bind(this)}
          ></textarea>
          <img src={log} className="log"></img>
          <div className="submit" onClick={this.tijiao.bind(this)}>
            寄出信件
          </div>
        </div>
      </div>
    );
  }
}
export default Xie;
