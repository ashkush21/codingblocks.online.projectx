/* Thanks to ~senpai~ :) */

export const pipe = () => {
  return function (param) {
    return arguments.reduce((acc, fn) => fn(acc), param)
  }
}

export const not = (fn) => {
  return function ()  {
    return !fn(...arguments)
  }
}