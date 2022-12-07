import react from "react";

const PageButton = ({ pg, setPage }) => {
  console.log(pg, "pg");
  return (
    <button value={pg} onClick={(e) => setPage(parseInt(e.target.value))}>
      {pg}
    </button>
  );
};

export default PageButton;
