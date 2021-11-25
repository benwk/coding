import { request, gql } from 'graphql-request'

const graphAPI = process.env.GRAPHCMS_ENDPOINT

export const test = async () => {
  const query = gql`
    query Test {
      test
    }
  `

  console.log(graphAPI)

  // const result = await request(graphAPI, query)

  // return result.test
}