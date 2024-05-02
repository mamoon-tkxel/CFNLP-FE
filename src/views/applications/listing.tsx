import DataTable from "@/components/DataTable";
import { DynamicObject } from "@/constants/types";
import { ADMIN_GRANT_COLUMNS } from "@/constants/tableColumns";
import { ActionMenu } from "@/components/ActionMenu";

export const ApplicationListing = ({
  data,
  pagination,
  handlePageChange,
  loading,
}: DynamicObject) => {
  const ActionsRow = () => {
    return <ActionMenu />;
  };

  const tableSetting = {
    hideActionColumn: false,
    showActionRow: true,
    showRowCheckboxes: true,
    showColumnCheckbox: true,
    ActionsRow,
  };

  return (
    <DataTable
      columns={ADMIN_GRANT_COLUMNS}
      data={data}
      settings={tableSetting}
      pagination={pagination}
      loading={loading}
      handlePageChange={handlePageChange}
    />
  );
};
