import { addIcon, exportIcon, filterIcon, sortingIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";
import { SearchBox } from "@/components/Search/searchBox";
import SideDrawer from "@/components/Drawer";
import { ADMIN_COUNTY_PROFILE_COLUMNS } from "@/constants/tableColumns";
import { ActionMenu } from "@/components/ActionMenu";
import useAdminCountyProfiles from "@/hooks/useAdminCountyProfiles";
import CreateCountyProfile from "./createCounty";
import { Link } from "react-router-dom";

const CountyProfiles = () => {
  const {
    openDrawer,
    closeDrawer,
    pagination,
    handlePageChange,
    countyInitialValues,
    TableData,
  } = useAdminCountyProfiles();

  const ActionsRow = () => {
    return (
      <Link to={"212"}>
        <ActionMenu />
      </Link>
    );
  };

  const tableSetting = {
    hideActionColumn: false,
    showActionRow: true,
    showRowCheckboxes: true,
    showColumnCheckbox: true,
    ActionsRow,
  };

  const closeDrawerHandler = () => closeDrawer(false);
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
            County Profiles
          </Typography>
          <ButtonComponent
            startIcon={addIcon}
            className="bg-clr-primary-blue-700 clr-white"
            text="Add County"
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
            columns={ADMIN_COUNTY_PROFILE_COLUMNS}
            data={TableData}
            settings={tableSetting}
            pagination={pagination}
            loading={false}
            handlePageChange={handlePageChange}
          />
        </Stack>
      </Stack>

      <SideDrawer open={openDrawer} onClose={closeDrawerHandler}>
        <CreateCountyProfile
          initialValues={countyInitialValues}
          closeDrawer={closeDrawerHandler}
        />
      </SideDrawer>
    </>
  );
};

export default CountyProfiles;
