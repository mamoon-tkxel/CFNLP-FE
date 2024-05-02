import { PaginationType, TablePaginationType } from "@/constants/types";
import { getCurrentDate } from "@/utils/helpers";
import { useState } from "react";

// import { USERS_LOGIN } from "@/constants/apiEndPoints";
// import { DynamicObject } from "@/constants/types";
// import httpCall from "@/helpers/httpRequests";

// import { useNavigate } from "react-router-dom";

const TableData = [
  {
    title: "Banteay Sre",
    status: "Active",
    type: "Office at",
    deadLine: "2024-04-04",
    amount: "$100",
    applications: "200",
  },
  {
    title: "Banteay Sre",
    status: "Active",
    type: "Office at",
    deadLine: "2024-04-04",
    amount: "$100",
    applications: "200",
  },
];
const useAdminGrant = () => {
  const [loading] = useState(false);
  const [openDrawer, closeDrawer] = useState(false);

  const [errorMessage] = useState("");
  const [pagination, setPagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 2,
  });

  const [grantInitialValues] = useState({
    title: "",
    description: "",
    type: "",
    amount: null,
    deadlineDate: getCurrentDate(),
    sendInvitation: false,
    status: true,
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

  //   const navigate = useNavigate();

  return {
    openDrawer,
    closeDrawer,
    loading,
    pagination,
    TableData,
    handlePageChange,
    grantInitialValues,
    errorMessage,
  };
};

export default useAdminGrant;
