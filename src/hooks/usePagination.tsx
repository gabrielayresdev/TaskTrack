import React from "react";

const usePagination = (lastPage: number) => {
  const [page, setPage] = React.useState<number>(0);
  function GoNextPage() {
    if (page < lastPage - 1) {
      setPage(page + 1);
    }
  }

  function GoPreviousPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }
  return { page, GoNextPage, GoPreviousPage };
};

export default usePagination;
