import gql from 'graphql-tag'

export default queries = {
    getlessons: gql`
        query getLessons{
            lessons{
            id
            thumbnail
            level
            title
            discussion
            transcript
            vocabulary
            }
        }
    }
    `,
    getlessons2: gql`
        query getLessons{
            lessons{
            id
            thumbnail
            level
            title
            discussion
            transcript
            vocabulary
            }
        }
    }
    `,
}