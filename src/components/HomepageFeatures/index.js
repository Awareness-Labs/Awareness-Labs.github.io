import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer-Centric',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        We belief that developers can drive the future of data platform.
      </>
    ),
  },
  {
    title: 'Ultra light-weight',
    Svg: require('@site/static/img/light.svg').default,
    description: (
      <>
        Rainforest control image is always under 50MB, and easy to deploy on kubernetes.
      </>
    ),
  },
  {
    title: 'In one box',
    Svg: require('@site/static/img/box.svg').default,
    description: (
      <>
        Rainforest embbed OLTP, OLAP, Stream, Message Queue, and more in one box.
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
