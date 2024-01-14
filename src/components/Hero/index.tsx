import React from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'

import Link from '@docusaurus/Link'

import HeroMain from './img/hero_main.svg'

import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">Kcxain</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text">
            {`在这里，我会持续整理与输出知识，记录并归档我的学习笔记，分享科研经历、技术方案等，带你领略计算机科学的魅力，感受训练人工智能的乐趣。`}
          </Translate>
          <br />
          <br />
          <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs">
                  <Translate id="hompage.hero.note">学习笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/docs/project">
                  <Translate id="hompage.hero.project">实战项目</Translate>
                </Link>
              ),
              cv: (
                <Link to="/about-me">
                  <Translate id="hompage.hero.cv">个人简历</Translate>
                </Link>
              ),
              blog: (
                <Link to="/blog/archive">
                  <Translate id="hompage.hero.blog">技术博客</Translate>
                </Link>
              )
            }}
          >
            {`你可以通过{cv}进一步了解我，或者随处逛逛，查看{note}、{project}以及{blog}`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about-me'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    qq: string
    zhihu: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-line" />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon="ri:qq-line" />
      </a>
      <a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a>
    </animated.div>
  )
}

export default Hero