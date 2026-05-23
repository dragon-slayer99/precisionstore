import "./Pagination.css";

function Pagination() {
  return (
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
  );
}

export default Pagination;
