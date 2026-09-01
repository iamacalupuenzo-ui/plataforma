'use client'
import { useEffect, useRef, useState } from 'react'

const media = '/invertase-assets/invertase.io/_next/static/media/'
const development = [
  ['Accelerate time-to-market', 'Get your product to market faster with our SDK development services. Reduce time-to-market from months to weeks.', 'development-card-2.ed66b36d.jpg'],
  ['Reduce development costs', 'Minimise development costs for your customers and internal teams. Well-designed SDKs save valuable time and resources.', 'development-card-3.8f73f677.jpg'],
  ['Boost app quality and stability', 'Develop SDKs that empower developers to build stable, performant, and secure applications, leading to a better user and developer experience.', 'development-card-4.b5939a87.jpg'],
  ['Foster a thriving developer ecosystem', 'Empower developers with clear documentation, intuitive APIs, guides, samples, and tutorials – to accelerate product adoption and diversify integrations.', 'development-card-5.8c13efd2.jpg'],
]
const maintenance = [
  ['Reduce overhead', 'Free your team from the ongoing effort of maintaining a complex SDK.', 'maintenance-card-1.903a171b.jpg'],
  ['Increase developer satisfaction', 'Give developers a reliable experience with timely updates.', 'maintenance-card-2.a74dbf25.jpg'],
  ['Ensure compatibility', 'Keep your SDK compatible with platforms, dependencies, and standards.', 'maintenance-card-3.3847983e.jpg'],
  ['Improve stability', 'Proactively resolve issues and keep your SDK performing reliably.', 'maintenance-card-4.5c4b777e.jpg'],
]
const capabilities = [
  ['SDK roadmap and architecture', 'We define a clear SDK roadmap and architecture, aligned with your goals and developer needs.', '07539f5b6b383bc3abcdd65c59e66123.svg'],
  ['API design & development', 'We design intuitive, well-documented APIs for seamless integration and developer satisfaction.', 'f169a32eafc051cfa4a6e5e390b1e85b.svg'],
  ['Libraries & tools', 'We develop essential libraries and powerful developer tools to streamline integration.', 'b3728f82f157d0d6a4ab271e23cf9b02.svg'],
  ['Cross-platform compatibility', 'We ensure your SDK is compatible with all necessary platforms and operating systems.', '2bb9f6e0dfa484bf7adf956de05e9874.svg'],
  ['High-quality code & security', 'We adhere to our coding standards, writing clean, robust, and secure code to enhance SDK reliability.', '20820f5fdc32c9ba7d04f81eeb11ecc9.svg'],
  ['Reliable testing & distribution', 'We automate testing and build efficient CI/CD pipelines for a smooth SDK release process.', '040224b6665fa8193fc885af205ad8ab.svg'],
]
const upkeep = [
  ['Community engagement', 'We foster a thriving developer community through responsive support, feedback, and open communication.', 'b902372ef011eb198f1ba2bd1ab67aa0.svg'],
  ['Documentation & versioning', 'We maintain comprehensive documentation and manage SDK versions to ensure seamless compatibility.', 'd964bb0754003a24ec45857920561086.svg'],
  ['Proactive updates', 'We proactively update your SDK, ensuring compatibility with new releases, security updates, and evolving needs.', '6b87c0a1fbd9dc2552e756ad594b5f74.svg'],
  ['Performance & reliability', 'We optimise your SDK for maximum performance, efficiency, stability, and minimal resource use.', '23869e8087618293fe7bca1332af3336.svg'],
  ['Security audits & management', 'We conduct regular security audits and vulnerability assessments to ensure your SDK is secure.', 'cd4f6464e55cc1d3e85e40e586c679a9.svg'],
  ['Release management', 'We maintain a consistent release schedule with thorough testing and clear release notes for developers.', '6ba9a6be2bcbc5675789bb77639d3a43.svg'],
]
const whyItems = [
  ['To access deep expertise', 'We bring a wealth of experience and knowledge in SDK development to you, ensuring you are in expert hands and guided by best practices.', '1fef01e41e41e2c9be87bf97360a5f2d.svg'],
  ['To optimise developer experience', 'We focus on reducing developer friction, with comprehensive documentation, responsive support, and an SDK designed for ease of use.', '5c8421e6a92e275f11f9f285860ce09b.svg'],
  ['To reduce total cost of ownership', 'Expertly designed and maintained SDKs minimise long-term costs by increasing efficiency and reducing technical debt.', '419ad727d1b7e292421df2d1225c829c.svg'],
  ['To accelerate time to market', 'We leverage our streamlined processes and extensive expertise to help you launch your SDK quickly and efficiently.', '8d6963d0ba0a587fd02f657aca6d6c59.svg'],
]
const faqs = [
  ["We're on a tight budget. Is SDK development affordable?", 'Yes! Our SDK development services can save you money. We leverage our expertise and efficient processes to reduce development time and costs compared to building in-house. We also offer flexible pricing models to fit your budget.'],
  ["We're unsure about open-sourcing our core technology. Is it right for us?", "Open-sourcing can offer benefits, but it depends on your goals and intellectual property concerns. We can help you assess if it's the right choice and guide you through licensing options."],
  ["We don't have the internal resources to dedicate to SDK maintenance. How can you help?", "We've got you covered! Our SDK maintenance services free up your internal team to focus on core product development. We handle all the updates, bug fixes, and support, ensuring your SDK remains compatible, secure, and performant."],
  ['What if our SDK maintenance needs change over time?', 'No problem! We offer flexible maintenance options to adapt with you. You can adjust your support level as needed, choosing from modular packages, scalable support, or short-term contracts.'],
]

function SdkHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    let rive: { cleanup?: () => void } | undefined
    let observer: IntersectionObserver | undefined
    import('@rive-app/canvas').then(({ Rive, Layout, Fit, Alignment }) => {
      if (!ref.current) return
      const instance = new Rive({ src: '/animations/pages/sdk/sdk-cp.riv', artboard: 'main', canvas: ref.current, autoplay: false, stateMachines: 'SM', layout: new Layout({ fit: Fit.Fill, alignment: Alignment.Center }), onLoad: () => instance.resizeDrawingSurfaceToCanvas() })
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) instance.play('SM')
        else instance.pause()
      }, { threshold: 0.1 })
      observer.observe(ref.current)
      rive = { cleanup: () => instance.cleanup() }
    })
    return () => { observer?.disconnect(); rive?.cleanup?.() }
  }, [])
  return <canvas ref={ref} width={1000} height={375} aria-label="Ilustración interactiva de SDK" />
}

function ConsultationButton({ footer = false }: { footer?: boolean }) {
  return <a className="sdk-button group" href={footer ? 'mailto:hello@example.com' : '#footer'}>
    <span className="button-border" />
    <span className="button-glow" />
    <span className="button-core" />
    <span className="button-inset" />
    <span className="button-inset-hover" />
    <span className="button-label">Book a consultation</span>
  </a>
}

export function SdkPage() {
  const [openFaq, setOpenFaq] = useState(0)
  return <main className="sdk-page">
    <header className="sdk-header"><a className="wordmark" href="/" aria-label="Invertase"><img src={`${media}842f9b5d6727dae66d91709cbc2dbf36.svg`} alt="Invertase" /></a><nav aria-label="Global"><button type="button"><span>Services</span><i className="header-chevron" aria-hidden="true" /></button><a href="#development">Open source</a><button type="button"><span>Products</span><i className="header-chevron" aria-hidden="true" /></button><a href="#faq">Blog</a><button type="button"><span>Company</span><i className="header-chevron" aria-hidden="true" /></button></nav><div className="header-actions"><a className="github-stars" href="https://github.com/invertase" target="_blank" rel="noreferrer" aria-label="Star us on GitHub">◉ <span>33.9k</span></a><a className="header-cta" href="#footer">Get in touch</a></div></header>
    <section className="sdk-hero"><div className="sdk-hero-art"><img className="sdk-hero-sphere" src={`${media}illustration.c5f4c4a3.png`} alt="" /><SdkHeroCanvas /></div><div className="sdk-hero-copy"><p className="sdk-kicker">Empower developers. Accelerate integration. Drive product growth.</p><h1>Drive product adoption with<br /><strong>developer-focused SDKs</strong></h1><p>We build and maintain high-quality software development kits that make it seamless for developers to integrate with your product.</p><div><ConsultationButton /><a className="sdk-link" href="#development">Read case study ›</a></div></div></section>
    <section className="sdk-light" id="development"><div className="sdk-container"><h2>SDK Development</h2><p className="sdk-subtitle">Exceptional SDKs. Seamless integration. Delighted developers. Increased adoption.</p><div className="sdk-card-grid sdk-development-cards"><article className="sdk-card sdk-development-lead"><picture><source media="(max-width: 767px)" srcSet={`${media}development-card-1-sm.e017aa18.jpg`} /><img src={`${media}development-card-1.1bf78a2e.jpg`} alt="" /></picture></article>{development.map(([title, body, image]) => <article className="sdk-card" key={title}><img src={`${media}${image}`} alt="" /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div><div className="sdk-capability-grid">{capabilities.map(([item, body, icon]) => <div key={item}><h3><img className="sdk-capability-icon" src={`${media}${icon}`} alt="" />{item}</h3><p>{body}</p></div>)}</div></div></section>
    <section className="sdk-light" id="maintenance"><div className="sdk-container"><h2>SDK maintenance</h2><p className="sdk-subtitle">Optimised SDK. Responsive support. Thriving community.</p><div className="sdk-card-grid">{maintenance.map(([title, body, image]) => <article className="sdk-card" key={title}><img src={`${media}${image}`} alt="" /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div><div className="sdk-capability-grid">{upkeep.map(([item, body, icon]) => <div key={item}><h3><img className="sdk-capability-icon" src={`${media}${icon}`} alt="" />{item}</h3><p>{body}</p></div>)}</div></div></section>
    <section className="sdk-experts"><div className="sdk-container"><h2>Leading SDK experts</h2><div className="expert-feature"><div><h3>Trusted by industry leaders</h3><p>Google and Amazon trust us to develop and maintain the SDKs that power their platforms.</p></div><picture><source media="(max-width: 767px)" srcSet={`${media}card-1-sm.7ee44309.jpg`} /><img src={`${media}card-1.941e4253.jpg`} alt="" /></picture></div><div className="expert-grid"><article><div><h3>Contributors to leading technologies</h3><p>We contribute to technologies used by millions of developers, including GCP, Firebase, Flutter, and React Native.</p></div><picture><source media="(max-width: 767px)" srcSet={`${media}card-2-sm.79cfd18f.jpg`} /><img src={`${media}card-2.174e2b5f.jpg`} alt="" /></picture></article><article><div><h3>Developers behind popular SDKs</h3><p>We’re the team behind popular open-source SDKs like React Native Firebase, Notifee, and the FlutterFire CLI.</p></div><picture><source media="(max-width: 767px)" srcSet={`${media}card-3-sm.e079374d.jpg`} /><img src={`${media}card-3.cb687c2d.jpg`} alt="" /></picture></article></div></div></section>
    <section className="sdk-why"><div className="sdk-container"><h2>Why partner with Invertase for your SDK needs?</h2><div className="why-grid">{whyItems.map(([item, body, icon]) => <div key={item}><h3><img src={`${media}${icon}`} alt="" />{item}</h3><p>{body}</p></div>)}</div></div><img className="why-bg" src={`${media}c9603a96398971b0e20683d995712e88.svg`} alt="" /></section>
    <section className="sdk-faq" id="faq"><div className="sdk-faq-container"><h2>Frequently asked questions</h2><ul>{faqs.map(([q, answer], i) => <li key={q}><button type="button" className={openFaq === i ? 'is-open' : ''} aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><span className="faq-chevron">⌄</span></button><div className={`faq-answer${openFaq === i ? ' is-open' : ''}`}><p>{answer}</p></div></li>)}</ul></div></section>
    <div className="footer-with-cta"><img className="footer-cta-bg" src={`${media}dac413a642eb704e98c6b12e7e4f6368.svg`} alt="" /><section className="sdk-cta"><div><h2>Let's build together</h2><p>Drive adoption with a world-class SDK.&nbsp;Focus on what matters the most — your product.</p><ConsultationButton /></div></section><footer className="sdk-footer" id="footer"><div className="sdk-footer-main"><div className="sdk-footer-brand"><a className="sdk-footer-logo" href="/"><img src={`${media}842f9b5d6727dae66d91709cbc2dbf36.svg`} alt="Invertase" /></a><div className="sdk-socials"><a href="https://x.com/invertaseio" aria-label="X.com (Twitter)"><span className="social-x">X</span></a><a href="https://invertase.link/discord" aria-label="Discord"><span className="social-discord">◉</span></a><a href="https://github.com/invertase" aria-label="GitHub"><span className="social-github">◖</span></a><a href="https://www.linkedin.com/company/invertase" aria-label="LinkedIn"><span className="social-linkedin">in</span></a></div></div><nav><div><strong>Services</strong><a href="/sdk">SDK development &amp; maintenance</a><a href="#development">Cross-platform development</a></div><div><strong>Products</strong><a href="https://docs.page/">Docs.page</a></div><div><strong>Resources</strong><a href="#development">Open source</a><a href="#faq">Blog</a></div><div><strong>Company</strong><a href="#footer">About us</a><a href="#footer">Brand assets</a><a href="#footer">Careers</a></div></nav></div><div className="sdk-footer-rule" /><div className="sdk-footer-bottom"><span>Copyright © 2026 Invertase Limited. All rights reserved.</span><div><a href="#footer">Privacy Policy</a><a href="#footer">Cookie Policy</a><a href="#footer">Terms of Service</a></div></div></footer></div>
  </main>
}
