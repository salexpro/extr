import produce from 'immer'

// eslint-disable-next-line import/prefer-default-export

export const isFilterActive = (filter) =>
  Object.values(filter.data).some((v) => v)

export const isAnyFilterActive = (filters) =>
  Object.values(filters).some((f) => f.data && isFilterActive(f))

export const buildFilter = (source, fetchedData) =>
  produce(source, (draft) => {
    fetchedData.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      draft.data[el] = draft?.data?.[el] || false
    })
  })

export const avgTime = (arr) =>
  // eslint-disable-next-line camelcase
  arr.reduce((acc, { response_time }) => acc + response_time, 0) / arr.length
