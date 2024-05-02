import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

type PaginationType = {
  rowsPerPage: number;
  page: number;
  onPageChange: (newPage: number) => void;
  onChangeRowsPerPage: (newRowsPerPage: number) => void;
  totalRecords: number;
};
export const TablePagination = ({
  pagination,
}: {
  pagination: PaginationType;
}) => {
  const [perPageDropdown, setPerPageDropdown] = useState<number[]>([]);

  useEffect(() => {
    const perPage = [10, 25, 100];
    const totalRecords = pagination.totalRecords;
    const updatePerPage = [];
    for (let i = 0; i < perPage.length; i++) {
      if (totalRecords <= perPage[i]) {
        updatePerPage.push(perPage[i]);
        break;
      } else {
        updatePerPage.push(perPage[i]);
      }
    }
    setPerPageDropdown([...updatePerPage]);
  }, [pagination.totalRecords]);

  const startRecord = (pagination?.page - 1) * pagination?.rowsPerPage + 1;
  const endRecord =
    pagination?.page * pagination?.rowsPerPage > pagination?.totalRecords
      ? pagination?.totalRecords
      : pagination?.page * pagination?.rowsPerPage;

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="24px"
    >
      <Stack>
        <Typography variant="body2" className="f-12 lh-22 f-w-500 clr-gray-200">
          {`Showing ${startRecord} – ${endRecord} of ${pagination.totalRecords} items`}
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Pagination
          onChange={(_, value: number) => pagination.onPageChange(value)}
          page={pagination.page}
          count={Math.ceil(pagination.totalRecords / pagination.rowsPerPage)}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiButtonBase-root": {
              color: "#A8B0B9",
            },
            "& .Mui-selected": {
              color: "black",
            },
          }}
        />
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap="8px">
        <Typography variant="body2" className="f-12 lh-22 f-w-500 clr-gray-200">
          Items per page:
        </Typography>

        <Select
          className="page-select"
          value={pagination.rowsPerPage}
          onChange={(e: SelectChangeEvent<number>) => {
            pagination.onChangeRowsPerPage(
              parseInt(e.target.value as string, 10)
            );
          }}
          inputProps={{ "aria-label": "Page" }}
        >
          {perPageDropdown.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Stack>
  );
};
