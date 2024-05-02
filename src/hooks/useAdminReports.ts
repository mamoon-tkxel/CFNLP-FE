import { PaginationType, TablePaginationType } from "@/constants/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableData = [
  {
    organizationCounty: "Catlog",
    submittedBy: "John Smith",
    chapter: "Chapter",
    dueDate: "2024-04-04",
    submittedOn: "John Smith",
    status: "Complete",
  },
  {
    organizationCounty: "Catlog",
    submittedBy: "John Smith",
    chapter: "Chapter",
    dueDate: "2024-04-04",
    submittedOn: "John Smith",
    status: "Complete",
  },
];
const useAdminReports = () => {
  const navigate = useNavigate();

  const [loading] = useState(false);
  const [pagination, setPagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 2,
  });

  //   handle Page Change
  const handlePageChange = ({
    page,
    pageSize,
    totalRecords,
  }: TablePaginationType) => {
    setPagination((prevState) => ({
      ...prevState,
      page: page ?? prevState.page,
      rowsPerPage: pageSize ?? prevState.rowsPerPage,
      totalRecords: totalRecords ?? prevState.totalRecords,
    }));
  };

  const actionHandler = (value: string | number) => {
    if (value === "view_application") {
      navigate("/admin/grants/12/applications");
    }
  };

  //   const navigate = useNavigate();

  return {
    loading,
    pagination,
    TableData,
    handlePageChange,

    actionHandler,
  };
};

export default useAdminReports;
