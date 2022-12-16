/* eslint-disable import/prefer-default-export */
// const SWITCHER = [
//   {
//     key: 'all',
//     label: 'All Nodes',
//   },
//   {
//     key: 'rpc',
//     label: 'RPC endpoints',
//   },
// ]

const dict = [
  ['europe', ['cz', 'fr', 'de', 'pl', 'ro', 'si', 'es', 'ch']],
  ['europe_top', ['ee', 'lv', 'lt', 'no', 'nl', 'ua', 'gb']],
  ['asia', ['sg', 'tw']],
]

const GROUPS = dict.reduce((acc, [value, keys]) => {
  keys.forEach((key) => Object.defineProperty(acc, key, { value }))
  return acc
}, {})

const LOCATIONS = {
  ca: [165, 147],
  us: [258, 217],
  mx: [204, 292],
  cw: [343, 341],
  br: [400, 440],
  ar: [352, 522],
  is: [511, 114],
  europe: [587, 215],
  europe_top: [664, 155],
  za: [645, 484],
  sc: [754, 405],
  ru: [819, 176], // parasha
  in: [826, 299],
  cn: [890, 257],
  asia: [938, 374],
  kr: [976, 245],
  jp: [1023, 259],
  au: [1012, 473],
}

const REF_SIZE = [1200, 600]

export { REF_SIZE, LOCATIONS, GROUPS }
