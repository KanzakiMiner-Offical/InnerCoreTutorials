import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Dễ học',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Chúng tôi cố gắng soạn các hướng dẫn một cách dễ hiểu nhất
      </>
    ),
  },
  {
    title: 'Hỗ trợ cộng đồng',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chúng tôi có một máy chủ Discord để giúp các bạn giải quyết vấn đề trong khi học
      </>
    ),
  },
  {
    title: 'By player for player',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Các hướng dẫn, bài học đều được soạn bới các người chơi có kinh nghiệm lập trình
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
