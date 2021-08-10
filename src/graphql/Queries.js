import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`{
    characters(page: 1) {
      info {
        count
        pages
      }
      results {
        name
        id
        location {
          name
          id
        }
        image
        origin {
          name
          id
        }
        episode {
          id
          episode
          air_date
        }
      }
    }
  }
`;