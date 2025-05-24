import axios from 'axios';

// 登录请求方法
const loginreq = (method, url, params) => {
  return axios({
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json', // 确保请求头是application/json
    },
    data: JSON.stringify(params), // 将参数转换为JSON字符串
  }).then(res => res.data);
};

// const loginreq = (method, url, params) => {
//     return axios({
//         method: method,
//         url: url,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         data: params,
//         traditional: true,
//         transformRequest: [
//             function(data) {
//                 let ret = ''
//                 for (let it in data) {
//                     ret +=
//                         encodeURIComponent(it) +
//                         '=' +
//                         encodeURIComponent(data[it]) +
//                         '&'
//                 }
//                 return ret
//             }
//         ]
//     }).then(res => res.data);
// };
// 通用公用方法
const req = (method, url, params) => {
  return axios({
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json', // 设置请求头为 application/json
      token: localStorage.getItem('logintoken')
    },
    [method.toLowerCase() === 'get' ? 'params' : 'data']: params
    // data: JSON.stringify(params), // 将数据转换为 JSON 字符串
  }).then(res => res.data);
};

// const req = (method, url, params) => {
//     return axios({
//         method: method,
//         url: url,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             token: localStorage.getItem('logintoken')
//         },
//         data: params,
//         traditional: true,
//         transformRequest: [
//             function(data) {
//                 let ret = ''
//                 for (let it in data) {
//                     ret +=
//                         encodeURIComponent(it) +
//                         '=' +
//                         encodeURIComponent(data[it]) +
//                         '&'
//                 }
//                 return ret
//             }
//         ]
//     }).then(res => res.data);
// };

export {
    loginreq,
    req
}
