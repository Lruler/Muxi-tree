import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";
import "./login.css";
import Service from "../../common/service";

class Login extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-restricted-globals
    this.state = {
      username: "",
      pwd: "",
      user: null,
      isPc: false,
    };
  }

  componentDidMount() {
    const width = document.body.offsetWidth;
    if (width > 700) {
      alert('用手机打开浏览获得更良好体验！')
      this.setState({ isPc: true });
    }
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  changePwd(e) {
    this.setState({
      pwd: e.target.value,
    });
  }
  Login() {
    const { username, pwd } = this.state;
    if (username && pwd) {
      Service.Login(username, pwd).then((res) => {
        if (res && res.code == 200) {
          localStorage.setItem("id", username);
          localStorage.setItem("token",res.data)
          this.setState({
              user:res.data
          })
        } else {
          alert('密码或用户名错误!')
        }
      }).catch(() => {
        alert('服务端错误')
      })
    }
  }
  render() {
    return (
      <div className="body">
        {this.state.isPc ? (
          "请用手机打开获得更良好体验哦！"
        ) : (
          <>
            {this.state.user && <Navigate to="/request" replace="true" />}
            <div className="centent">
              <input
                className="username"
                placeholder="请输入学号"
                onChange={this.changeUsername.bind(this)}
              ></input>
              <input
                className="pwd"
                type="password"
                placeholder="请输入密码"
                onChange={this.changePwd.bind(this)}
              ></input>
              <div className="denglu" onClick={this.Login.bind(this)}>
                学号登录
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Login;
