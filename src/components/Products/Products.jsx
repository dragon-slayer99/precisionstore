import { Link } from 'react-router-dom'
import './Products.css'
import { useEffect, useState } from 'react'


function Products() {

  const [activeTab, setActiveTab] = useState(0);

  const displayDiv = {
      display: "block"
  }

  const hideDiv = {
        display: "none"
  }

  function handleCurrentTabStyle() {

  }
  
  
  return (
    <main class="ecom-catalog">
      <div class="catalog-container">
        <header class="catalog-header">
          <div class="breadcrumbs">
            <Link to="/" >HOME</Link> <span class="separator">/</span>
            <span class="current">EQUIPMENT</span>
          </div>
          <h1 class="catalog-title">TACTICAL EQUIPMENT</h1>

          <div class="category-tabs">
            <button class={activeTab === 0 ? "tab active" : "tab"} onClick={() => setActiveTab(0)}>
              ALL GEAR
              <div class="active-stripe" style={activeTab === 0 ? displayDiv : hideDiv}></div>
            </button>
            <button class={activeTab === 1 ? "tab active" : "tab"} onClick={() => setActiveTab(1)}>
              WEARABLES
              <div class="active-stripe" style={activeTab === 1 ? displayDiv : hideDiv}></div>
            </button>
            <button class={activeTab === 2 ? "tab active" : "tab"} onClick={() => setActiveTab(2)}>
              CARRY SYSTEMS
              <div class="active-stripe" style={activeTab === 2 ? displayDiv : hideDiv}></div>
            </button>
            <button class={activeTab === 3 ? "tab active" : "tab"} onClick={() => setActiveTab(3)}>
              OPTICS
              <div class="active-stripe" style={activeTab === 3 ? displayDiv : hideDiv}></div>
            </button>
          </div>
        </header>

        <div class="catalog-toolbar">
          <span class="results-count">12 ITEMS FOUND</span>
          <div class="toolbar-actions">
            <button class="btn-tool">
              FILTER <span class="plus-icon">+</span>
            </button>
            <button class="btn-tool">SORT: RELEVANCE</button>
          </div>
        </div>

        <section class="product-grid">
          <article class="product-card">
            <div class="product-visual">
              <span class="badge">NEW</span>
              <div class="visual-placeholder">IMG_01: CHRONO_MAX</div>
            </div>
            <div class="product-meta">
              <div class="meta-top">
                <span class="product-category">WEARABLES</span>
                <span class="product-price">$ 450.00</span>
              </div>
              <h2 class="product-name">CHRONO-MAX MK. II</h2>
              <p class="product-desc">TITANIUM CASING // 100M RESISTANCETITANIUM CASING // 100M RESISTANCETITANIUM CASING // 100M RESISTANCETITANIUM CASING // 100M RESISTANCE</p>
              <a class="product-action">VIEW DETAILS</a>
            </div>
          </article>

          <article class="product-card">
            <div class="product-visual">
              <div class="visual-placeholder">IMG_02: CARBON_DUFFEL</div>
            </div>
            <div class="product-meta">
              <div class="meta-top">
                <span class="product-category">CARRY SYSTEMS</span>
                <span class="product-price">$ 280.00</span>
              </div>
              <h2 class="product-name">CARBON MATRIX DUFFEL</h2>
              <p class="product-desc">BALLISTIC NYLON // 45L CAPACITY</p>
              <a class="product-action">VIEW DETAILS</a>
            </div>
          </article>

          <article class="product-card">
            <div class="product-visual">
              <span class="badge alert">LOW STOCK</span>
              <div class="visual-placeholder">IMG_03: OPTICS_PRO</div>
            </div>
            <div class="product-meta">
              <div class="meta-top">
                <span class="product-category">OPTICS</span>
                <span class="product-price">$ 890.00</span>
              </div>
              <h2 class="product-name">TACTICAL VISOR X-1</h2>
              <p class="product-desc">POLARIZED MATRICES // UV400</p>
              <a class="product-action">VIEW DETAILS</a>
            </div>
          </article>

          <article class="product-card">
            <div class="product-visual">
              <div class="visual-placeholder">IMG_04: HARNESS</div>
            </div>
            <div class="product-meta">
              <div class="meta-top">
                <span class="product-category">EQUIPMENT</span>
                <span class="product-price">$ 195.00</span>
              </div>
              <h2 class="product-name">KINETIC DROP HARNESS</h2>
              <p class="product-desc">AEROSPACE ALUMINUM // MIL-SPEC</p>
              <a class="product-action">VIEW DETAILS</a>
            </div>
          </article>
        </section>

        <div class="pagination">
          <button class="btn-page active">1</button>
          <button class="btn-page">2</button>
          <button class="btn-page">3</button>
          <span class="page-divider">...</span>
          <button class="btn-page-next">
            NEXT <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Products