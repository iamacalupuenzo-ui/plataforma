'use client'

import { useState } from 'react'

const media = '/invertase-assets/invertase.io/_next/static/media/'

type SiteHeaderProps = {
  page: 'home' | 'sdk'
}

export function SiteHeader({ page }: SiteHeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const links = page === 'home'
    ? { openSource: '#open-source', blog: '#resources', crossPlatform: '#services', cta: '#footer' }
    : { openSource: '#development', blog: '#faq', crossPlatform: '#development', cta: '#footer' }

  const toggle = (menu: string) => setOpenMenu(openMenu === menu ? null : menu)

  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="Invertase"><img src={`${media}842f9b5d6727dae66d91709cbc2dbf36.svg`} alt="Invertase" /></a>
    <nav aria-label="Global">
      <div className="header-menu">
        <button type="button" aria-expanded={openMenu === 'services'} onClick={() => toggle('services')}><span>Services</span><i className={`header-chevron${openMenu === 'services' ? ' is-open' : ''}`} aria-hidden="true" /></button>
        {openMenu === 'services' && <div className="header-dropdown">
          <a href="/sdk"><span className="dropdown-icon">&lt;/&gt;</span><span><strong>SDK development</strong><small>Accelerate product growth</small></span><i>›</i></a>
          <a href={links.crossPlatform}><span className="dropdown-icon">↗</span><span><strong>Cross-platform development</strong><small>Embrace Flutter or React Native</small></span><i>›</i></a>
        </div>}
      </div>
      <a href={links.openSource}>Open source</a>
      <div className="header-menu"><button type="button" aria-expanded={openMenu === 'products'} onClick={() => toggle('products')}><span>Products</span><i className={`header-chevron${openMenu === 'products' ? ' is-open' : ''}`} aria-hidden="true" /></button></div>
      <a href={links.blog}>Blog</a>
      <div className="header-menu"><button type="button" aria-expanded={openMenu === 'company'} onClick={() => toggle('company')}><span>Company</span><i className={`header-chevron${openMenu === 'company' ? ' is-open' : ''}`} aria-hidden="true" /></button></div>
    </nav>
    <div className="header-actions"><a className="github-stars" href="https://github.com/invertase" target="_blank" rel="noreferrer" aria-label="Star us on GitHub">◉ <span>33.9k</span></a><a className="header-cta" href={links.cta}>Get in touch</a></div>
  </header>
}
