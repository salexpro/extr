/* eslint-disable import/prefer-default-export */
export const flip = (obj) =>
  Object.fromEntries(Object.entries(obj).map((a) => a.reverse()))

export const sanitize = (data) => data.substr(1, data.indexOf(', ') - 1)
