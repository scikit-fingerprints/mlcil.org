import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#research-areas">
            Explore Research Areas
          </Link>
        </div>
      </div>
    </header>
  );
}

function LabFeatures() {
  return (
    <section id="research-areas" className="padding-vert--xl features-section" >
      <div className="container">
        <div className="row">

          <div className="col col--4 margin-bottom--lg">
            <div className="card shadow--md h-100 lab-card">
              <div className="card__header padding-top--lg padding-horiz--lg">
                <Heading as="h3" style={{ fontSize: '1.25rem', marginBottom: '0' }}>
                  <span style={{ marginRight: '8px' }}>🧪</span> Chemoinformatics
                </Heading>
              </div>
              <div className="card__body padding--lg text--left">
                <p className="feature-text">
                  Advancing computational pharmacology and drug design.
                  We bridge the gap between chemical expertise and robust software engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="col col--4 margin-bottom--lg">
            <div className="card shadow--md h-100 lab-card">
              <div className="card__header padding-top--lg padding-horiz--lg">
                <Heading as="h3" style={{ fontSize: '1.25rem', marginBottom: '0' }}>
                  <span style={{ marginRight: '8px' }}>🛠️</span> Open Source Tools
                </Heading>
              </div>
              <div className="card__body padding--lg text--left">
                <p className="feature-text">
                  Developing robust, open-source software for the scientific community.
                  We build platforms that enable rigorous benchmarking, data processing, and reproducible research.
                </p>
              </div>
            </div>
          </div>

          <div className="col col--4 margin-bottom--lg">
            <div className="card shadow--md h-100 lab-card">
              <div className="card__header padding-top--lg padding-horiz--lg">
                <Heading as="h3" style={{ fontSize: '1.25rem', marginBottom: '0' }}>
                  <span style={{ marginRight: '8px' }}>💻</span> Machine Learning
                </Heading>
              </div>
              <div className="card__body padding--lg text--left">
                <p className="feature-text">
                  Implementing highly efficient algorithms tailored for massive chemical datasets.
                  We focus on the optimization and strict validation of novel neural architectures.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="ML & Chemoinformatics Lab (MLCIL), AGH University of Krakow">
      <HomepageHeader />
      <main>
        <LabFeatures />
        <section className="padding-vert--xl text--center">
          <div className="container">
            <Heading as="h2">Publications</Heading>
            <p className="margin-top--md coming-soon-text">
              Check back soon for our first technical writeups and analyses.
            </p>
            <div className="margin-top--lg">
              <Link className="button button--outline button--primary button--lg" to="/blog">
                Check out the Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
