import { PaginationType, TablePaginationType } from "@/constants/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableData = [
  {
    name: "Catelog",
    person: "John Smith",
    structure: "3 chapters",
    funding: "(2024-2025)",
    last_update: "2024-04-04",
  },
  {
    name: "Catelog",
    person: "John Smith",
    structure: "3 chapters",
    funding: "(2024-2025)",
    last_update: "2024-04-04",
  },
  {
    name: "Catelog",
    person: "John Smith",
    structure: "3 chapters",
    funding: "(2024-2025)",
    last_update: "2024-04-04",
  },
];
const useAdminCountyProfiles = () => {
  const navigate = useNavigate();

  const [loading] = useState(false);
  const [openDrawer, closeDrawer] = useState(false);

  const [errorMessage] = useState("");
  const [pagination, setPagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 2,
  });

  const [countyInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    organizationName: "",
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
    countyInitialValues,
    errorMessage,
    actionHandler,
  };
};

export default useAdminCountyProfiles;
