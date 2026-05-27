import './CatalogTabs.css'

function CatalogTabs({ activeTab, setActiveTab }) {
  const tabs = ["ALL PRODUCTS", "CLOTHING", "BAGS", "ACCESSORIES"];
  return (
    <div className="category-tabs">
      {tabs.map((tab, idx) => (
        <button
          className={activeTab === idx ? "tab active" : "tab"}
          onClick={() => setActiveTab(idx)}
          key={tab}
        >

          {tab}

          {activeTab === idx && <div className="active-stripe"></div>}
        </button>
      ))}
    </div>
  );
}

export default CatalogTabs;
