import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  TablePagination,
  Typography,
} from "@mui/material";
import { DynamicObject } from "@/constants/types";

type PaginationType = {
  rowsPerPage: number;
  page: number;
  onPageChange: (newPage: number) => void;
  onChangeRowsPerPage: (newRowsPerPage: number) => void;
  totalRecords: number;
};
export const Paginations = ({ pagination }: { pagination: PaginationType }) => {
  const [pageDropdownValue, setPageDropdownValue] = useState(pagination.page);
  const [perPageDropdown, setPerPageDropdown] = useState<number[]>([]);

  useEffect(() => {
    setPageDropdownValue(pagination.page - 1);
  }, [pagination.page]);

  const handlePageChange = (event: SelectChangeEvent<number>) => {
    const newPage = parseInt(event.target.value as string, 10);
    setPageDropdownValue(newPage);
    pagination.onPageChange(newPage);
  };

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

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="24px"
    >
      <Stack>
        <Typography variant="body2" className="f-12 lh-22 f-w-500 clr-gray-200">
          Showing 1 - 10 of 100 items
        </Typography>
        <Select
          className="page-select"
          value={pageDropdownValue}
          onChange={handlePageChange}
          inputProps={{ "aria-label": "Page" }}
          sx={{display:"none"}}
        >
          {Array.from(
            Array(Math.ceil(pagination.totalRecords / pagination.rowsPerPage)),
            (_, index) => (
              <MenuItem key={index} value={index}>
                {index + 1}
              </MenuItem>
            )
          )}
        </Select>
      </Stack>

      <Stack spacing={2}>
        <Pagination
          count={pagination.totalRecords}
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
      
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={pagination.totalRecords}
        rowsPerPage={pagination.rowsPerPage}
        page={pagination.page - 1}
        onPageChange={(_: DynamicObject, newPage: DynamicObject) =>
          pagination.onPageChange(newPage)
        }
        sx={{display:"none"}}
        //  onRowsPerPageChange={(event) => pagination.onChangeRowsPerPage(parseInt(event.target.value, 10))}
      />
    </Stack>
  );
};
