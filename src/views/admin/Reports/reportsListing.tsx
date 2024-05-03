import { exportIcon, filterIcon, sortingIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";
import { SearchBox } from "@/components/Search/searchBox";
import { ADMIN_REPORTS_COLUMNS } from "@/constants/tableColumns";
import { ActionMenu } from "@/components/ActionMenu";
import useAdminReports from "@/hooks/useAdminReports";
import { useNavigate } from "react-router-dom";

const ACTION_OPTIONS = [
  {
    label: "Send Reminder",
    value: "reminder",
  },
];

const AdminReportsListing = () => {
  const navigate = useNavigate();
  const { pagination, handlePageChange, TableData, actionHandler } =
    useAdminReports();

  const ActionsRow = () => {
    return <ActionMenu options={ACTION_OPTIONS} clickHandler={actionHandler} />;
  };

  const tableSetting = {
    hideActionColumn: false,
    showActionRow: true,
    showRowCheckboxes: true,
    showColumnCheckbox: true,
    ActionsRow,
  };

  return (
    <>
      <Stack gap="24px">
        <Stack
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Typography className="f-20 lh-23 f-w-800">
            <span onClick={() => navigate(-1)}>{"<---"}</span>
            Reports of: Traffic Safety Education Initiative
          </Typography>
        </Stack>
        <Stack
          borderRadius="24px"
          gap="24px"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
          p="24px 0 0 0"
        >
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            paddingX="24px"
          >
            <Stack
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
              gap="10px"
            >
              <SearchBox />
              <ButtonComponent
                startIcon={filterIcon}
                text="Filter"
                variant="outlined"
                className="h-40 clr-gray-500 border-clr-gray-300"
              />
            </Stack>

            <Stack
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
              gap="8px"
            >
              <ButtonComponent
                startIcon={exportIcon}
                text="Export"
                variant="outlined"
                className="h-40 clr-gray-500 border-clr-gray-300"
              />
              <ButtonComponent
                startIcon={sortingIcon}
                text="Sort by:Title"
                variant="outlined"
                className="h-40 clr-gray-500 border-clr-gray-300"
                sx={{
                  svg: {
                    path: {
                      fill: "#5F6269",
                    },
                  },
                }}
              />
            </Stack>
          </Stack>
          <DataTable
            columns={ADMIN_REPORTS_COLUMNS}
            data={TableData}
            settings={tableSetting}
            pagination={pagination}
            loading={false}
            handlePageChange={handlePageChange}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default AdminReportsListing;
