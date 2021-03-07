import React from "react";

export default function Pagination({
  postsPerPage,
  totalPost,
  paginate,
  prevPage,
  nextPage,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className="page-item" >
            <a onClick={() => prevPage()} href="#" className="page-link">
             Prev
            </a>
          </li>
          {pageNumber.map((num) => (
            <li className="page-item" key={num}>
              <a onClick={() => paginate(num)} href="#" className="page-link">
                {num}
              </a>
            </li>
          ))}

          <li className="page-item" >
            <a onClick={() => nextPage()} href="#" className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
