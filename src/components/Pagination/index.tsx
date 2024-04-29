import { useEffect, useState } from "react";

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
export const Pagination = ({ pagination }: { pagination: PaginationType }) => {
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
    <div className="custom-main-pagination">
      <div className="custom-select-pagination-wrapper">
        <Typography variant="body2">Page</Typography>
        <Select
          className="page-select"
          value={pageDropdownValue}
          onChange={handlePageChange}
          inputProps={{ "aria-label": "Page" }}
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
      </div>
      <div className="custom-select-pagination-wrapper rows-per-page">
        <Typography variant="body2">Rows per page</Typography>
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
      </div>

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={pagination.totalRecords}
        rowsPerPage={pagination.rowsPerPage}
        page={pagination.page - 1}
        onPageChange={(_: DynamicObject, newPage: DynamicObject) =>
          pagination.onPageChange(newPage)
        }
        //  onRowsPerPageChange={(event) => pagination.onChangeRowsPerPage(parseInt(event.target.value, 10))}
      />
    </div>
  );
};
