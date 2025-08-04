import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          我的个人博客
        </Heading>
        <p className="hero__subtitle">分享我的想法、经历和知识</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            浏览文章 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`我的博客`}
      description="这是个人博客网站，记录我的生活点滴和技术分享">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className={styles.blogIntro}>
                <Heading as="h2" className={styles.blogTitle}>欢迎来到我的世界</Heading>
                <div className={styles.profileSection}>
                  <div className={styles.avatarWrapper}>
                    <div className={styles.avatar}></div>
                  </div>
                  <div className={styles.bioText}>
                    <p>大家好，这是zjzj的个人博客，我会在这里分享我的学习心得、生活感悟和技术文章。</p>
                    <p>我热爱探索新知识，喜欢记录成长过程中的点点滴滴。希望通过这个博客与更多志同道合的朋友交流。</p>
                  </div>
                </div>
                <div className={styles.categoriesSection}>
                  <Heading as="h3" className={styles.sectionTitle}>博客分类</Heading>
                  <div className={styles.categories}>
                    <Link to="/blog/tags/技术" className={styles.categoryItem}>技术笔记</Link>
                    <Link to="/blog/tags/生活" className={styles.categoryItem}>生活随笔</Link>
                    <Link to="/blog/tags/阅读" className={styles.categoryItem}>读书心得</Link>
                    <Link to="/blog/tags/旅行" className={styles.categoryItem}>旅行见闻</Link>
                  </div>
                </div>
                <div className={styles.recentPosts}>
                  <Heading as="h3" className={styles.sectionTitle}>最新文章</Heading>
                  <ul className={styles.postList}>
                    <li className={styles.postItem}>
                      <Link to="/blog/2021/08/26/welcome">欢迎来到我的博客</Link>
                      <span className={styles.postDate}>2021年8月26日</span>
                    </li>
                    <li className={styles.postItem}>
                      <Link to="/blog/2021/08/01/mdx-blog-post">使用MDX增强你的博客</Link>
                      <span className={styles.postDate}>2021年8月1日</span>
                    </li>
                    <li className={styles.postItem}>
                      <Link to="/blog/2019/05/29/long-blog-post">我的学习历程</Link>
                      <span className={styles.postDate}>2019年5月29日</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
