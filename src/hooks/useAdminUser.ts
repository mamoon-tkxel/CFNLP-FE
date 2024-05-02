import { PaginationType, TablePaginationType } from "@/constants/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableData = [
  {
    name: "Emily",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Sarah",
    role: "Admin",
    status: "Active",
  },
  {
    name: "David",
    role: "Admin",
    status: "Active",
  },
];
const useAdminUsers = () => {
  const navigate = useNavigate();

  const [loading] = useState(false);
  const [openDrawer, closeDrawer] = useState(false);

  const [errorMessage] = useState("");
  const [pagination, setPagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 2,
  });

  const [usersInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    sendInvitation: true,
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
    openDrawer,
    closeDrawer,
    loading,
    pagination,
    TableData,
    handlePageChange,
    usersInitialValues,
    errorMessage,
    actionHandler,
  };
};

export default useAdminUsers;
