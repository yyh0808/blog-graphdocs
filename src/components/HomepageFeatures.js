import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '海量数据',
    Svg: require('../../static/img/image-1.svg').default,
    description: (
      <>
        支撑图数据库的海量数据可视化展示
      </>
    ),
  },
  {
    title: '简单易用',
    Svg: require('../../static/img/image-2.svg').default,
    description: (
      <>
        简单部署，总结大量社区用户使用经验的易用交互体验
      </>
    ),
  },
  {
    title: '多视图分析',
    Svg: require('../../static/img/image-3.svg').default,
    description: (
      <>
        多种视图模式，应对不同图可视化分析需求
      </>
    ),
  },
  {
    title: '多主题定制',
    Svg: require('../../static/img/image-4.svg').default,
    description: (
      <>
        适配各种主题模式，方便嵌入各平台业务系统
      </>
    ),
  },
  {
    title: '图组件丰富',
    Svg: require('../../static/img/image-5.svg').default,
    description: (
      <>
        丰富的图组件，轻松应对图数据分析过程中各种难题
      </>
    ),
  },
  {
    title: '灵活可扩展',
    Svg: require('../../static/img/image-6.svg').default,
    description: (
      <>
        React框架，方便接入业务系统，同时支持对特效的扩展和改造
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
