import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import EpisodeList from "../components/episodeList"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

import { graphql } from 'gatsby';

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <main>
      <Header/>
      <EpisodeList episodeNodes={data.allFeedPodcasts.edges}/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Podtron</title>

export const query = graphql`
{ 
    allFeedPodcasts  {
        edges {
            node {
                title
                link
                content
                pubDate
                guid
                enclosure {
                    url
                }
                itunes {
                  episode
                  summary
                  explicit
                }
            }
        }
    }
        
    feedPodcasts {
        title
        link
        content
        pubDate
        guid
        enclosure {
            url
        }
        itunes {
            episode
            summary
            explicit
        }
    }
  }`;
