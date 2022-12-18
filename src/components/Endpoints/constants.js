const TYPES = {
  rpc: 'RPC (all methods)',
  limited: 'RPC (several methods)',
  validator: 'Validator',
}

const TYPES_DESCR = {
  rpc: 'responded to 25 most popular methods',
  limited: 'responded to at least one method',
  validator: 'has validator’s identity pubkey',
}

const TABLE = {
  endpoint: 'RPC Endpoint',
  type: 'Type',
  methods: 'Supported methods',
  country: 'Country',
  provider: 'Provider',
  version: 'Version',
  response: 'Response\n time',
}

const excludedFromFilters = ['endpoint', 'response']

const FILTERS = Object.entries(TABLE).reduce((prev, [key, label]) => {
  return !excludedFromFilters.includes(key)
    ? {
        ...prev,
        [key]: {
          label,
          data:
            key === 'type'
              ? Object.values(TYPES).reduce(
                  (acc, t) => ({ ...acc, [t]: false }),
                  {}
                )
              : {},
        },
      }
    : prev
}, {})

const SESSION_STORAGE_KEY = 'tableFilters'

export { TYPES, TYPES_DESCR, FILTERS, TABLE, SESSION_STORAGE_KEY }
