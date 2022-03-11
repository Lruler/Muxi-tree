function Fetch(url, opt = {}) {
  opt.method = 'POST';
  opt.headers = {
    "Content-Type": "application/json"
  }
  if (opt.token) {
    opt.headers.token = opt.token;
  }
  opt.body = JSON.stringify(opt.data) || null;

  //   console.log(url)
  //   console.log(opt)
  return fetch(url, opt)
    .then(response => {
      if (response.ok) {
        return response.json().then(res => {
          return res;
        });
      }
    })
}

let Service = {

  Login(username, pwd) {
    return Fetch('api/user', {
      data: {
        student_id: username,
        password: pwd
      }
    });
  },

  tijiao(data, token) {
    return Fetch('api/content', {
      token: token,
      data: {
        "text": data
      }
    })
  }
}

export default Service;