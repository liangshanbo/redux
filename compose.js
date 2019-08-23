/*
 * @Author: longhai.wang
 * @Date: 2019-08-16 16:59:24
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-16 17:00:01
 * @Description: compose
 * @jira: 
 */
const compose = (...func) => {
  if (func.length === 0) {
    return (arg) => arg;
  }
  if (func.length === 1) {
    return func[0];
  }
  return func.reduce((a, b) => (...args) => a(b(...args)));
};

export default compose;
