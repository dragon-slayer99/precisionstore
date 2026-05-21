import { Link } from "react-router-dom";
import "./Products.css";
import CatalogHeader from "../CatalogHeader/CatalogHeader";
import ProductGrid from "../ProductGrid/ProductGrid";
import CatalogToolBar from "../CatalogToolBar/CatalogToolBar";
import { useEffect, useState } from "react";

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const productDetails = [
    {
      image: "PRODUCT_01",
      name: "CHRONO CLASSIC WATCH",
      category: "ACCESSORIES",
      price: 450.0,
      description:
        "Minimal stainless steel timepiece designed for everyday wear with premium craftsmanship and water-resistant construction.",
      badge: "NEW",
    },
    {
      image: "PRODUCT_02",
      name: "CARBON WEEKENDER BAG",
      category: "BAGS",
      price: 280.0,
      description:
        "Spacious travel bag crafted with durable premium fabric, reinforced handles, and modern utility storage.",
      badge: null,
    },
    {
      image: "PRODUCT_03",
      name: "VISION SUNGLASSES",
      category: "ACCESSORIES",
      price: 890.0,
      description:
        "Lightweight polarized sunglasses with UV protection and a clean modern silhouette.",
      badge: "LOW STOCK",
    },
    {
      image: "PRODUCT_04",
      name: "AERO RUNNER SNEAKERS",
      category: "FOOTWEAR",
      price: 320.0,
      description:
        "Breathable performance sneakers featuring cushioned soles, lightweight mesh, and responsive support.",
      badge: "SALE",
    },
    {
      image: "PRODUCT_05",
      name: "MONARCH LEATHER WALLET",
      category: "ACCESSORIES",
      price: 150.0,
      description:
        "Slim genuine leather wallet with multiple card compartments and refined hand-stitched detailing.",
      badge: null,
    },
    {
      image: "PRODUCT_06",
      name: "ECLIPSE BOMBER JACKET",
      category: "APPAREL",
      price: 740.0,
      description:
        "Contemporary bomber jacket crafted with insulated lining, durable zippers, and a tailored fit.",
      badge: "NEW",
    },
    {
      image: "PRODUCT_07",
      name: "SUMMIT HIKING BACKPACK",
      category: "BAGS",
      price: 510.0,
      description:
        "Rugged outdoor backpack with ergonomic straps, waterproof fabric, and expandable storage capacity.",
      badge: null,
    },
    {
      image: "PRODUCT_08",
      name: "NOVA WIRELESS HEADPHONES",
      category: "ELECTRONICS",
      price: 620.0,
      description:
        "Noise-canceling wireless headphones delivering immersive sound quality and extended battery life.",
      badge: "BESTSELLER",
    },
    {
      image: "PRODUCT_09",
      name: "LUXE COTTON HOODIE",
      category: "APPAREL",
      price: 210.0,
      description:
        "Soft heavyweight cotton hoodie designed with a relaxed silhouette and premium brushed interior.",
      badge: null,
    },
    {
      image: "PRODUCT_10",
      name: "STRIDE PERFORMANCE SHORTS",
      category: "APPAREL",
      price: 120.0,
      description:
        "Moisture-wicking athletic shorts built for flexibility, comfort, and all-day active movement.",
      badge: "NEW",
    },
    {
      image: "PRODUCT_11",
      name: "ATLAS LEATHER BOOTS",
      category: "FOOTWEAR",
      price: 680.0,
      description:
        "Premium leather boots featuring reinforced soles, durable stitching, and versatile urban styling.",
      badge: "LOW STOCK",
    },
    {
      image: "PRODUCT_12",
      name: "ORBIT SMART SPEAKER",
      category: "ELECTRONICS",
      price: 340.0,
      description:
        "Compact smart speaker with rich audio performance, voice assistant support, and wireless connectivity.",
      badge: null,
    },
    {
      image: "PRODUCT_13",
      name: "SILVERLINE BRACELET",
      category: "ACCESSORIES",
      price: 95.0,
      description:
        "Elegant brushed metal bracelet designed with a clean profile and adjustable clasp closure.",
      badge: "SALE",
    },
    {
      image: "PRODUCT_14",
      name: "ELEMENT TECH TEE",
      category: "APPAREL",
      price: 85.0,
      description:
        "Lightweight technical t-shirt engineered for breathability, comfort, and modern everyday wear.",
      badge: null,
    },
    {
      image: "PRODUCT_15",
      name: "VORTEX GAMING MOUSE",
      category: "ELECTRONICS",
      price: 130.0,
      description:
        "Ergonomic gaming mouse equipped with precision tracking, customizable buttons, and RGB lighting.",
      badge: "BESTSELLER",
    },
    {
      image: "PRODUCT_16",
      name: "HAVEN CERAMIC MUG",
      category: "HOME",
      price: 45.0,
      description:
        "Hand-finished ceramic mug with a matte texture, comfortable grip, and minimalist aesthetic.",
      badge: null,
    },
    {
      image: "PRODUCT_17",
      name: "PULSE FITNESS WATCH",
      category: "ELECTRONICS",
      price: 560.0,
      description:
        "Advanced fitness smartwatch offering heart-rate monitoring, GPS tracking, and sleep analytics.",
      badge: "NEW",
    },
    {
      image: "PRODUCT_18",
      name: "TITAN DUFFLE BAG",
      category: "BAGS",
      price: 390.0,
      description:
        "Heavy-duty duffle bag featuring reinforced compartments, weather-resistant materials, and sleek styling.",
      badge: null,
    },
    {
      image: "PRODUCT_19",
      name: "ARCTIC PUFFER VEST",
      category: "APPAREL",
      price: 460.0,
      description:
        "Insulated puffer vest designed for lightweight warmth, mobility, and versatile layering.",
      badge: "LOW STOCK",
    },
    {
      image: "PRODUCT_20",
      name: "ZENITH DESK LAMP",
      category: "HOME",
      price: 175.0,
      description:
        "Modern aluminum desk lamp with adjustable brightness, energy-efficient LEDs, and a slim profile.",
      badge: null,
    },
    {
      image: "PRODUCT_21",
      name: "PRISM LAPTOP SLEEVE",
      category: "ACCESSORIES",
      price: 110.0,
      description:
        "Protective laptop sleeve crafted with padded lining, water-resistant fabric, and minimalist detailing.",
      badge: "SALE",
    },
    {
      image: "PRODUCT_22",
      name: "EVEREST TRAIL SHOES",
      category: "FOOTWEAR",
      price: 540.0,
      description:
        "All-terrain trail shoes engineered with superior grip, durable cushioning, and breathable support.",
      badge: null,
    },
    {
      image: "PRODUCT_23",
      name: "AURORA SCENTED CANDLE",
      category: "HOME",
      price: 70.0,
      description:
        "Luxury soy wax candle infused with calming fragrances and housed in a reusable glass vessel.",
      badge: "NEW",
    },
    {
      image: "PRODUCT_24",
      name: "VECTOR PORTABLE CHARGER",
      category: "ELECTRONICS",
      price: 145.0,
      description:
        "Fast-charging portable power bank featuring dual USB outputs and compact travel-friendly construction.",
      badge: "BESTSELLER",
    },
    {
      image: "PRODUCT_25",
      name: "CIPHER CROSSBODY BAG",
      category: "BAGS",
      price: 260.0,
      description:
        "Compact crossbody bag designed with secure compartments, adjustable straps, and premium hardware.",
      badge: null,
    },
  ];

  function handleCurrentTabStyle() {}

  return (
    <main className="ecom-catalog">
      <div className="catalog-container">
        <CatalogHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* <!-- TOOLBAR --> */}

        <CatalogToolBar
          productCnt={productDetails.length}
          setSortOrder={setSortOrder}
        />

        {/* <!-- PRODUCTS --> */}

        <ProductGrid productsList={productDetails} />

        {/* <!-- PAGINATION --> */}

        <div className="pagination">
          <button className="btn-page active">1</button>

          <button className="btn-page">2</button>

          <button className="btn-page">3</button>

          <span className="page-divider"> ... </span>

          <button className="btn-page-next">
            NEXT
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Products;
