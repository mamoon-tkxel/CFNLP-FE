import DataTable from "@/components/DataTable";
import { PaginationType } from "@/constants/types";
import { useState } from "react";

const data = [
  {
    title: "Banteay Sre",
    status: "active",
    contact: "John Smith",
    appliedDate: "2024-04-04",
  },
  {
    title: "Banteay Sre",
    status: "active",
    contact: "John Smith",
    appliedDate: "2024-04-04",
  },
];

const Grants = () => {
  const [pagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 100,
  });

  const columns = [
    { key: "title", label: "Organization & County" },
    { key: "contact", label: "Contact Person" },
    { key: "appliedDate", label: "Applied on" },
    { key: "status", label: "Status" },
  ];

  const tableSetting = {
    hideActionColumn: false,
    showActionRow: false,
  };

  return (
    <div>
      <div>Grants listing</div>
      <DataTable
        columns={columns}
        data={data}
        settings={tableSetting}
        pagination={pagination}
        loading={false}
      />
    </div>
  );
};

export default Grants;
