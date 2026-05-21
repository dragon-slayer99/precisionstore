import "./CatalogToolBar.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function CatalogToolBar({ productCnt, setSortOrder }) {
  const optionsList = [
    { text: "FEATURED", value: "FEATURED" },
    { text: "LOW TO HIGH", value: "PRICE_LTOH" },
    { text: "HIGH TO LOW", value: "PRICE_HTOL" },
    { text: "NEW ARRIVALS", value: "NEWEST" },
  ];

  return (
    <div className="catalog-toolbar">
      <span className="results-count"> {productCnt} PRODUCTS </span>

      <div className="toolbar-actions">
        {/* <button className="btn-tool">
          FILTER
          <span className="plus-icon">+</span>
        </button> */}

        <DropdownMenu optionsList={optionsList} />


      </div>
    </div>
  );
}

export default CatalogToolBar;
