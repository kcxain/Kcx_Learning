import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faZhihu, faTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.css';


export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
            <div id='contact-me' style={{"display":"flex","justifyContent":"center"}}>
              {/* <h4>Contact Me: */}
                <a href="mailto:kcxain@gmail.com" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faEnvelope} style={{"fontSize": "36px"}}/>
                </a>
                <a href="https://www.zhihu.com/people/deconx" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faZhihu} style={{"fontSize": "36px"}}/>
                </a>
                <a href="https://twitter.com/kecxain" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faTwitter} style={{"fontSize": "36px"}}/>
                </a>
                <a href="https://github.com/kcxain" className={styles.linkicon}>
                  <FontAwesomeIcon icon={faGithubAlt} style={{"fontSize": "36px"}}/>
                </a>
                
              {/* </h4> */}

            </div>
          </div>
        )}
      </div>
    </footer>
  );
}