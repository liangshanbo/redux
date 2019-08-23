/*
 * @Author: 
 * @Date: 2019-08-14 21:20:50
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-14 21:24:30
 * @Description: 
 * @jira: 
 */
const createActions = (type, processFunc) => {
  return (data) => {
    return {
      type,
      payload: typeof processFunc === 'function' ? processFunc(data) : data,
    }
  }
}

export default createActions;