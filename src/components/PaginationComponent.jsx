// PaginationComponent.jsx
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-8">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => onPageChange(value)}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#FF3500",
            borderColor: "#FF3500",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#FF3500",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#ff5e2b",
            },
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#ffe5db",
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
