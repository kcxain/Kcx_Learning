import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '结构化笔记',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        记录、归档成体系的笔记：读书笔记、课程学习笔记、实验解析笔记等。如《计算机网络：自顶向下方法》阅读笔记、CSAPP 实验解析。
      </>
    ),
  },
  {
    title: '个人博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        持续整理与输出知识，不定时发表比赛复盘、论文阅读、个人随笔等文章。
      </>
    ),
  },
  {
    title: '求知之路',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        日拱一卒，坚持每天总结任务完成情况，拟定次日计划，每周总结当前得失，记录我的求知之路。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
