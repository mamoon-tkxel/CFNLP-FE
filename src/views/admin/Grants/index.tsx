import { addIcon, exportIcon, sortingIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";
import { SearchBox } from "@/components/Search/searchBox";
import CreateGrant from "./createGrant";
import SideDrawer from "@/components/Drawer";
import useAdminGrant from "@/hooks/useAdminGrant";
import { ADMIN_GRANT_COLUMNS } from "@/constants/tableColumns";
import { ActionMenu } from "@/components/ActionMenu";
import FilterMenus from "@/components/FilterComponent";

const ACTION_OPTIONS = [
  {
    label: "View Applications",
    value: "view_application",
  },
  {
    label: "Send Invitation",
    value: "send_invitation",
  },
  {
    label: "Edit",
    value: "edit",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

const Grants = () => {
  const {
    openDrawer,
    closeDrawer,
    pagination,
    handlePageChange,
    grantInitialValues,
    TableData,
    actionHandler,
  } = useAdminGrant();

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
          <Typography className="f-20 lh-23 f-w-800">Grants</Typography>
          <ButtonComponent
            startIcon={addIcon}
            className="bg-clr-primary-blue-700 clr-white"
            text="Add Grant"
            onClick={() => closeDrawer(true)}
          />
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
              {/* <ButtonComponent
                startIcon={filterIcon}
                text="Filter"
                variant="outlined"
                className="h-40 clr-gray-500 border-clr-gray-300"
              /> */}
              <FilterMenus/>
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
            columns={ADMIN_GRANT_COLUMNS}
            data={TableData}
            settings={tableSetting}
            pagination={pagination}
            loading={false}
            handlePageChange={handlePageChange}
          />
        </Stack>
      </Stack>

      <SideDrawer open={openDrawer} onClose={() => closeDrawer(false)}>
        <CreateGrant initialValues={grantInitialValues} />
      </SideDrawer>
    </>
  );
};

export default Grants;
