'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { PaginationNext, PaginationPrev } from "@/svg";

const Pagination = ({
  totalPages,
  currPage,
}) => {

  const totalPage = totalPages;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Update URL with current page
  function updateURL(pageNumber) {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("page", pageNumber);
    router.push(`?${queryParams.toString()}`);
  }

  function setPage(idx) {
    if (idx <= 0 || idx > totalPage) {
      return;
    }
    updateURL(idx);
    window.scrollTo(0, 0);
  }


  return (
    <nav>
      {totalPage > 1 && (
        <ul className="flex items-center space-x-2">
          <li>
            <button
              onClick={() => setPage(currPage - 1)}
              className={`tp-pagination-prev prev page-numbers ${
                currPage === 1 && "disabled"
              }`}
            >
              <PaginationPrev />
            </button>
          </li>

          {Array.from({ length: totalPage }, (_, i) => i + 1).map((n) => (
            <li key={n}>
              <button
                onClick={() => setPage(n)}
                className={`page-numbers ${currPage === n ? "current" : ""}`}
              >
                {n}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => setPage(currPage + 1)}
              className={`next page-numbers ${
                currPage === totalPage ? "disabled" : ""
              }`}
            >
              <PaginationNext />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
