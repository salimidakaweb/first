"use client"
import ReactPaginate from "react-paginate";

export default function Pagination({pageCount} : {pageCount: number}) {

    const handlePageClick = () => {

    }
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

