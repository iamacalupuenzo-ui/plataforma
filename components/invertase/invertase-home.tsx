'use client'

import { useState } from 'react'
import { SiteHeader } from './site-header'

const asset = '/invertase-assets/invertase.io/_next/static/media/'
const sanity = '/invertase-assets/cdn.sanity.io/images/1v0jq1bx/production/'

const services = [
  ['SDK Development', 'Empower developers with reliable, well-designed SDKs that integrate seamlessly into your platform, inspiring them to build amazing solutions.', '77b474d4f9b18b8171d53369da44028a.svg'],
  ['SDK Maintenance', 'Keep your SDKs up-to-date, secure, and efficient with our maintenance services, handling updates, fixes, and compatibility, so your team can focus.', '5b8e21952742a1a806baa032ddab955f.svg'],
  ['Cross-Platform Development', 'Accelerate development and time-to-market with a unified codebase. We migrate apps to Flutter or React Native, enabling faster builds and innovation.', 'f0bf91dd123a506110abd837a93723c7.svg'],
]

const openSource = [
  ['React Native Firebase', 'Add Firebase features to your React Native projects.', '12.3k', 'react-native-logo.05225e8d.png', '962193a5e44365cd5ca90a80de528355.svg'],
  ['Notifee', 'Add engaging notifications to your React Native projects.', '2.2k', 'notifee-logo.7a60b2c3.png', '8cc1f6a2a4bc78051e80ca963848c9b9.svg'],
  ['Melos', 'Organise your Dart & Flutter projects with multiple packages.', '1.5k', 'melos-logo.d65ca121.png', 'c02d3a0a6fd73aba04cebcb8a5b3458f.svg'],
  ['React Native Google Mobile Ads', 'Monetize your React Native apps with Google Ads.', '1k', 'google-mobile-ads-logo.29cc21f6.png', '4118f1194595ef00e6e4c1d34987fef2.svg'],
  ['FlutterFire CLI', 'Add Firebase features to your Flutter projects.', '193', 'flutter-fire-logo.21c27605.png', '44dcfef9759241170807ac703dd74f35.svg'],
]

const stories = [
  ['Transforming FlutterFire: The Official Firebase SDK for Flutter', 'b7b77656ff62350eb2662001e2d579c83732f140-2016x1194-5e60cc11ab.jpg', 'b4ad613ec99f490b3d7748299a6d40a724c0f5cb-158x52-eb05006e5b.svg'],
  ['Canonical Embraces Flutter, Guided by Invertase', 'd717a472ab47e8d73857aeda73a7132341911984-2016x1194-5e60cc11ab.jpg', 'df059a71429613d0b7245cd8188844046c0b8009-158x52-eb05006e5b.svg'],
  ['Making Documentation Easy for Widgetbook with docs.page', '939ab82ae80684321e088031575e88a30e7c1524-2016x1194-5e60cc11ab.jpg', 'b992f7ca3fb1a28baad8ad9b7c8a9b3851e9eda8-184x52-eb05006e5b.svg'],
]

const posts = [
  ['docs.page 2.0', 'Jul 31, 2026'],
  ['DevEx 101: Developer Experience Explained', 'Feb 5, 2025'],
  ['Assertions in Dart and Flutter tests', 'Feb 2, 2023'],
  ['Sending emails using Firestore and Firebase Extensions', 'Oct 6, 2022'],
]

export function InvertaseHome() {
  const [showCookie, setShowCookie] = useState(true)
  const [activeStory, setActiveStory] = useState(0)

  return (
    <main className="invertase-page">
      <SiteHeader page="home" />

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1><span>Empower developers.</span><span>Engineer excellence.</span></h1>
            <p>We help technology companies provide exceptional developer experiences. We make developer tools, SDKs, and libraries for the open-source ecosystem.</p>
            <div className="trusted"><span>Trusted by industry leaders</span><div><img src="/invertase-assets/invertase.io/_next/static/media/27a1b00ba91854895a12366cc06e6958.svg" alt="Google" /><img src="/invertase-assets/invertase.io/_next/static/media/c251e62211f03e96e19e4330470abac0.svg" alt="Amazon" /><img src="/invertase-assets/invertase.io/_next/static/media/63c1713463217a3bed92bbd3f0a5be1f.svg" alt="Canonical" /></div></div>
            <div className="hero-actions"><a className="button button-outline" href="#footer"><span className="button-border" /><span className="button-glow" /><span className="button-core" /><span className="button-inset" /><span className="button-inset-hover" /><span className="button-label">Book a consultation</span></a><a className="text-link" href="#services">Explore our services ›</a></div>
          </div>
          <div className="hero-art" aria-hidden="true"><video className="hero-video" autoPlay loop muted playsInline preload="metadata"><source src="/invertase-assets/invertase.io/videos/pages/home/hero.webm" type="video/webm" /><source src="/invertase-assets/invertase.io/videos/pages/home/hero.mp4" type="video/mp4" /></video></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container"><h2>Our services</h2><div className="service-grid">{services.map(([title, body, icon]) => <article key={title} className="service-card"><div className="service-heading"><img className="service-icon" src={`${asset}${icon}`} alt="" /><h3>{title}</h3></div><p>{body}</p><a href="#footer">Learn more <span aria-hidden="true">›</span></a></article>)}</div></div>
      </section>

      <section className="open-source" id="open-source">
        <div className="container"><div className="section-intro"><h2>Empowering developers through open source</h2><p>Our open-source software improves the developer experience for developers in 175 countries, empowering them to build better applications.</p><a href="#footer">Explore open-source resources ›</a></div></div><div className="rail">{openSource.map(([name, body, stars, logo, background]) => <article className="oss-card" key={name}><img className="oss-background" src={`${asset}${background}`} alt="" /><div className="oss-content"><span className="oss-stars"><img src={`${asset}a5da2f3c589ae1c090595fa33d6aa7e3.svg`} alt="" />{stars}</span><img className="oss-logo" src={`${asset}${logo}`} alt="" /><div><h3>{name}<i>›</i></h3><p>{body}</p></div></div></article>)}</div><div className="container"><div className="metrics"><div><strong>90 million</strong><span>Monthly downloads</span></div><div><strong>33.9k</strong><span>GitHub stars</span></div><div><strong>4.7k</strong><span>Discord members</span></div><div><strong>2.5k</strong><span>Code contributors</span></div></div></div>
      </section>

      <section className="tools" id="tools"><div className="container tools-layout"><div className="tools-intro"><h2>Developer tools, reimagined</h2><p>We understand the challenges developers face. That’s why we build products that streamline workflows, eliminate friction, and empower developers to focus on what they do best: making great products.</p></div><div className="tools-showcase"><article className="tools-partner"><img src={`${asset}partner-bg.24e82eb0.jpg`} alt="" /><h3>Build Better<br />Software, Faster</h3><span>✦</span></article><a className="docs-card" href="#footer"><img src={`${asset}docs-new-bg.5411f6b5.jpg`} alt="" /><div><strong>Docs.page</strong><p>Ship documentation, like you ship code.</p><span>›</span></div></a></div></div></section>

      <section className="stories"><div className="container"><div className="section-intro"><h2>Success stories</h2><p>Explore how we’ve transformed developer experiences.</p></div><div className="story-grid">{stories.map(([title, image, logo], index) => <article className={`story${activeStory === index ? ' is-active' : ''}`} key={title} onClick={() => setActiveStory(index)}><img className="story-background" src={`${sanity}${image}`} alt="" /><img className="story-logo" src={`${sanity}${logo}`} alt="" /><div className="story-copy"><h3>{title}</h3><a href="#footer" onClick={(event) => event.stopPropagation()}>Read case study <i>›</i></a><span className="story-progress"><b /></span></div></article>)}</div></div></section>

      <section className="join section-dark"><div className="container"><h2>Join our growing team</h2><p>Obsessed with developer experience? So are we. Come shape the future with us.</p><a className="button button-light" href="#footer">See open positions</a></div></section>

      <section className="resources section-light" id="resources"><div className="container"><div className="section-intro"><h2>Access developer insights and resources</h2><p>Stay informed and inspired with the latest insights, tutorials, and best practices from the Invertase team.</p><a href="#footer">Read the Blog ›</a></div><div className="post-grid">{posts.map(([title, date]) => <article key={title}><div className="post-image" /><small>Elliot Hesp · {date}</small><h3>{title}</h3><a href="#footer">Read article ›</a></article>)}</div></div></section>

      <section className="community section-dark"><div className="container"><div className="section-intro centered"><h2>Join the Invertase community</h2><p>Engage with developers, share insights, and stay up-to-date.</p></div><div className="community-grid">{[['Stay informed', 'Get the latest news, updates and announcements.', 'Follow us on X'], ['Learn and discover', 'Watch tutorials, demos, and deep dives.', 'Watch on YouTube'], ['Connect with developers', 'Get real-time support, discuss ideas, and connect with fellow developers.', 'Join our Discord'], ['Contribute to open source', 'Access our open-source resources and give back to the community.', 'Collaborate on GitHub']].map(([title, body, action]) => <article key={title}><span className="community-icon">✦</span><h3>{title}</h3><p>{body}</p><a href="#footer">{action} ›</a></article>)}</div></div></section>

      <footer className="footer" id="footer"><div className="container footer-cta"><h2>Transform your developer experience</h2><p>Drive developer adoption and accelerate product growth with Invertase.</p><div><a className="button button-outline" href="mailto:hello@example.com">Book a consultation</a><a className="text-link" href="#services">Explore our services ›</a></div></div><div className="container footer-bottom"><div><a className="wordmark" href="#top"><span>✣</span> INVERTASE</a><p>Copyright © 2026 Invertase Limited. All rights reserved.</p></div><div className="footer-links"><span>Services</span><a href="#services">SDK development & maintenance</a><a href="#services">Cross-platform development</a><span>Resources</span><a href="#open-source">Open source</a><a href="#resources">Blog</a></div></div></footer>

      {showCookie && <aside className="cookie"><p>We use cookies to improve your experience.<br />Learn more in our <a href="#footer">Privacy Policy</a>.</p><div><button onClick={() => setShowCookie(false)}>Decline</button><button className="accept" onClick={() => setShowCookie(false)}>Accept</button></div></aside>}
    </main>
  )
}
