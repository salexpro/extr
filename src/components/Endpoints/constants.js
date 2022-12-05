const TYPES = {
  unspecified: 'RPC Endpoint',
  full_rpc: 'Full RPC Endpoint',
}

const FILTERS = {
  node_type: {
    label: 'Type',
    data: Object.values(TYPES).reduce((acc, t) => ({ ...acc, [t]: false }), {}),
  },
  supported_methods: {
    label: 'Supported methods',
    data: {},
  },
  country: {
    label: 'Country',
    data: {},
  },
  isp: {
    label: 'Provider',
    data: {},
  },
  version: {
    label: 'Version',
    data: {},
  },
}

const TABLE = [
  'RPC Endpoint',
  'Type',
  'Supported methods',
  'Country',
  'Provider',
  'Version',
  'Response\n time',
]

const SESSION_STORAGE_KEY = 'tableFilters'

export { TYPES, FILTERS, TABLE, SESSION_STORAGE_KEY }
