import "./CatalogHeader.css";
import CatalogTabs from "../CatalogTabs/CatalogTabs";

function CatalogHeader({ activeTab, setActiveTab }) {
  const tabs = ["ALL PRODUCTS", "CLOTHING", "BAGS", "ACCESSORIES"];

  return (
    <header className="catalog-header">
      <div className="breadcrumbs">
        <a href="#">HOME</a>
        <span className="separator">/</span>
        <span className="current">SHOP</span>
      </div>

      <h1 className="catalog-title">MODERN ESSENTIALS</h1>

      <CatalogTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
    </header>
  );
}

export default CatalogHeader;
