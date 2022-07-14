import { gql } from "@apollo/client";

export const GET_WRITE_DAY = gql`
  query GetWriteDay {
    writeDay {
      years
      months
      dates
    }
  }
`