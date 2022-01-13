import React from 'react';
import LogoSmall from '../../assets/images/yb-light-logo.svg';
import LogoDSSBanner from '../../assets/images/banner/dss-logo-banner.svg';
import BackgroundImage from 'gatsby-background-image';
import ConferenceIcon from '../../assets/images/conference-icon.svg';
import { graphql, Link, StaticQuery } from 'gatsby';


const Banner = ({ title, showPresents, showCaptionBar }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "banner/dss-asia-homepage-banner.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileBannerImage: file(relativePath: { eq: "banner/dss-asia-homepage-vertical-banner.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
       LogoSmall: file(relativePath: { eq: "LogoSmall.png" }) {
         childImageSharp {
           fixed(width: 125, height: 125) {
             ...GatsbyImageSharpFixed
           }
         }
       }
     }
   `}
    render={
      data => {
        const sources = [
          data.mobileBannerImage.childImageSharp.fluid,
          {
            ...data.desktopBannerImage.childImageSharp.fluid,
            media: `(min-width: 701px)`,
          },
        ];
        return (
          <section>
            <BackgroundImage Tag="div" fluid={sources} id="banner">
              <div className="inner">
                <header className="major">
                  <div className="left-area">
                    <img src={LogoDSSBanner} alt="DSS" />
                    <div className="hasTag"><span>#</span>distributedsqlsummit <span>#</span>DSSAsia <span>#</span>distributedsql</div>
                  </div>
                  <div className="right-area">
                    <h1>Go Cloud Native.<br />Embrace Distributed SQL</h1>
                    {showPresents &&
                      <div className="presents">
                        <span className="text">PRESENTED BY</span>
                        <a href="https://yugabyte.com/">
                          <img style={{
                            width: '150px',
                            objectFit: 'contain'
                          }} src={LogoSmall} alt="YugaByte" />
                        </a>
                      </div>
                    }
                    <div className="container">
                      <ul className="details">
                        <li>
                          <div>
                            <h3>
                              March 1, 2022<br />
                              <span>Conference Day</span>
                            </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>
                              March 2, 2022<br />
                              <span>Workshop Day</span>
                            </h3>
                          </div>
                        </li>
                      </ul>
                      <div className="cta-bar">
                        {/* {<Link to="#" className="btn-rounded">
                          Register
                        </Link>} */}
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </BackgroundImage>
            {showCaptionBar &&
              <div className="banner-caption-bar">
                <img src={ConferenceIcon} alt="Conference icon" /> A free online conference to push the boundaries of cloud native RDBMS forward.
              </div>
            }
          </section>
        )
      }
    }
  />
)

export default Banner;