import { useState } from 'react';

const usePager = () => {
  const [page, setPage] = useState(1);
  const handlePageClick = (change) => {
    setPage(prevState => (prevState += change));
  };

  return [page, handlePageClick];
};

export default usePager;
