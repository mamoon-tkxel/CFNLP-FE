import { PaginationType, TablePaginationType } from "@/constants/types";
import { APPLICATION_TYPE } from "@/views/applications/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableData = [
  {
    organizationCounty: "Banteay Sre",
    contactPerson: "John Smith",
    appliedDate: "2024-04-04",
    status: "Active",
    grant: "Grant",
    amount: "$100",
    applications: "200",
  },
];

interface ADMIN_APPLICATION_HOOK_TYPES {
  applicationType: string;
}

const useAdminApplication = ({
  applicationType,
}: ADMIN_APPLICATION_HOOK_TYPES) => {
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

  const actionMenusClickHandler = (value: string | number) => {
    if (applicationType === APPLICATION_TYPE.ADMIN_GRANT_APPLICATION) {
      if (value === "detail") {
        navigate("/admin/grants/12/applications/view");
      }
    }
    // if (value === "view_application") {
    //   navigate("/admin/grants/12/applications");
    // }
  };

  //   const navigate = useNavigate();

  return {
    loading,
    pagination,
    TableData,
    handlePageChange,

    actionMenusClickHandler,
  };
};

export default useAdminApplication;
