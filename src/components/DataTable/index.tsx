import React, { useEffect, useState } from "react";

import { TablePagination } from "@/components/Pagination";
import "./DataTable.scss";

import {
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DynamicObject, TablePaginationType } from "@/constants/types";
import { sortingIcon } from "@/assets/svgs";

export interface TableColumn {
  key: string;
  label: string;
  image?: string | number;
  permission?: string;
  sortType?: "number" | "string";
}

export interface TableData {
  [key: string]: DynamicObject;
}

type PaginationType = {
  rowsPerPage: number;
  page: number;
  totalRecords: number;
};
interface DataTableTypes {
  columns: TableColumn[];
  childTableColumns?: TableColumn[];
  data: TableData[];
  settings: DynamicObject;
  pagination?: PaginationType;
  selectedRows?: DynamicObject;
  loading: boolean;
  handlePageChange?: ({
    page,
    pageSize,
    totalRecords,
  }: TablePaginationType) => void;
  handleSearchFields?: (val: DynamicObject) => void;
}

const DataTable: React.FC<DataTableTypes> = ({
  columns,
  data,
  settings,
  selectedRows = [],
  pagination,
  loading,
  handlePageChange,
}) => {
  const [slicedData, setSlicedData] = useState(data);

  const {
    hideActionColumn = false,
    showActionRow = false,
    actionColumnText = "",
    ActionsRow,
    showColumnCheckbox = false,
    showRowCheckboxes = false,
    staticColumns = [],
    hidePagination = false,
    modifiedRow = [],
    CustomRenderRow,
    handleSelectCheckbox,
    displayActionBtn = false,
    setShowButtons,
    hideActionColumnText = false,
  } = settings;

  useEffect(() => {
    const cloneData = [...data];

    setSlicedData([...cloneData]);
  }, [data]);

  const handleCheckboxSelection = (
    row: DynamicObject,
    checked: boolean,
    single: "single" | "multiple"
  ) => {
    if (single === "multiple" && !row.length) {
      return;
    }
    if (handleSelectCheckbox && showColumnCheckbox) {
      if (single === "single") {
        let selectedValues = [];
        if (checked) {
          selectedValues = [...selectedRows, row];
        } else {
          let cloneSelectedRows = [...selectedRows];
          cloneSelectedRows = cloneSelectedRows.filter(
            (item) => item._id !== row._id
          );
          selectedValues = cloneSelectedRows;
        }
        if (displayActionBtn) {
          selectedValues?.length < 1
            ? setShowButtons(false)
            : setShowButtons(true);
        }
        handleSelectCheckbox([...selectedValues]);
      } else {
        if (checked) {
          if (displayActionBtn) {
            setShowButtons(true);
          }
          handleSelectCheckbox(row);
        } else {
          if (displayActionBtn) {
            setShowButtons(false);
          }
          handleSelectCheckbox([]);
        }
      }
    }
  };

  function pageChangeHandler(newPage: number) {
    handlePageChange && handlePageChange({ page: newPage });
  }

  function handleRowsPerPageChange(newRowsPerPage: number) {
    handlePageChange && handlePageChange({ pageSize: newRowsPerPage, page: 1 });
  }

  const togglerHandler = (
    row: DynamicObject,
    toggleState: boolean,
    single: "single" | "multiple"
  ) => {
    if (single === "multiple") {
      setSlicedData([
        ...slicedData.map((item) => {
          return { ...item, isExpandable: toggleState };
        }),
      ]);
    } else {
      setSlicedData([
        ...slicedData.map((item) =>
          item?._id === row?._id ? { ...item, isExpandable: toggleState } : item
        ),
      ]);
    }
  };

  const tableRow = () => {
    if (!selectedRows.length) {
      return false;
    }
    const selectedIds = new Set(
      selectedRows.map((obj: DynamicObject) => obj._id)
    );
    return slicedData.every((obj) => selectedIds.has(obj._id));
  };

  return (
    <TableContainer component={Paper} className="custom-table-wrapper">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {showColumnCheckbox && (
              <>
                <TableCell
                  className="checkboxCol"
                  sx={{
                    backgroundColor: "#F5F5FA",
                    boxShadow: "0px -1px 0px 0px #F1F1F1 inset",
                  }}
                >
                  <Stack alignItems="center" flexDirection="row" gap="10px">
                    {sortingIcon}

                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleCheckboxSelection(
                          slicedData,
                          e.target.checked,
                          "multiple"
                        );
                        togglerHandler(
                          slicedData,
                          e.target.checked,
                          "multiple"
                        );
                      }}
                      checked={tableRow()}
                    />
                  </Stack>
                </TableCell>
              </>
            )}
            {columns.map((column, index) => (
              <TableCell
                key={`${index}tablebodyCell`}
                sx={{
                  backgroundColor: "#F5F5FA",
                  boxShadow: "0px -1px 0px 0px #F1F1F1 inset",
                }}
              >
                <span className="table-header-cell-wrapper">
                  <span className="f-14 lh-21 f-w-400 clr-gray-100">
                    {column.label}
                  </span>
                </span>
              </TableCell>
            ))}
            {!hideActionColumn && (
              <TableCell
                sx={{
                  backgroundColor: "#F5F5FA",
                  boxShadow: "0px -1px 0px 0px #F1F1F1 inset",
                }}
              >
                {!hideActionColumnText ? actionColumnText || "Actions" : null}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && slicedData.length ? (
            slicedData.map((row, index) => (
              <React.Fragment key={`${index}rowid`}>
                <TableRow>
                  {showRowCheckboxes && (
                    <TableCell className="checkboxCol">
                      <Stack alignItems="center" flexDirection="row" gap="10px">
                        {sortingIcon}
                        <input
                          checked={selectedRows?.some(
                            (item: { _id: number }) => item._id === row._id
                          )}
                          onChange={(e) => {
                            handleCheckboxSelection(
                              { ...row, isExpandable: true },
                              e.target.checked,
                              "single"
                            );
                            togglerHandler(row, e.target.checked, "single");
                          }}
                          type={"checkbox"}
                        />
                      </Stack>
                    </TableCell>
                  )}
                  {columns.map((column, index) => (
                    <TableCell
                      key={`${index}tablebodyCell`}
                      className={
                        staticColumns.includes(column.key)
                          ? "static-Column"
                          : ""
                      }
                    >
                      <span
                       className="f-14 lh-21 f-w-500 clr-black-100">

                        {modifiedRow.includes(column.key) ||
                        Array.isArray(row[column.key]) ? (
                          <CustomRenderRow
                            row={row}
                            column={column.key}
                            columnData={column}
                          />
                        ) : (
                          row[column.key]
                        )}
                      </span>
                    </TableCell>
                  ))}
                  {showActionRow && (
                    <TableCell>
                      <ActionsRow id={row._id} row={row} />
                    </TableCell>
                  )}
                </TableRow>
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1}>
                <div className="no-data-found">
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Typography variant="body2">No Data Found</Typography>
                  )}
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {!hidePagination && pagination && (
        <TablePagination
          pagination={{
            ...pagination,
            onPageChange: pageChangeHandler,
            onChangeRowsPerPage: handleRowsPerPageChange,
          }}
        />
      )}
    </TableContainer>
  );
};

export default DataTable;
