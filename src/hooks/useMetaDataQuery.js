import { useStaticQuery, graphql } from "gatsby"

const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }      
  `)
  return data.site.siteMetadata
}

export default useMetaDataQuery