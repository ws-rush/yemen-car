import createClient from 'openapi-fetch'

const client = createClient<any>({ baseUrl: `http://localhost:3000/` })

export { client }
