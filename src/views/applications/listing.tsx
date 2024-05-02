import DataTable from "@/components/DataTable";
import { DynamicObject } from "@/constants/types";
import { ADMIN_APPLICATION_COLUMNS } from "@/constants/tableColumns";
import { TableActionsRow } from "./actions";

export const ApplicationListing = ({
  data,
  pagination,
  handlePageChange,
  loading,
  applicationType,
}: DynamicObject) => {
  const ActionsRow = () => {
    return <TableActionsRow applicationType={applicationType} />;
  };

  const tableSetting = {
    hideActionColumn: false,
    showActionRow: true,
    showRowCheckboxes: true,
    showColumnCheckbox: true,
    ActionsRow,
  };

  const columns = ADMIN_APPLICATION_COLUMNS[applicationType];

  return (
    <DataTable
      columns={columns}
      data={data}
      settings={tableSetting}
      pagination={pagination}
      loading={loading}
      handlePageChange={handlePageChange}
    />
  );
};
