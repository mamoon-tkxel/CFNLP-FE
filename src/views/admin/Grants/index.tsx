import { addIcon, exportIcon, filterIcon, sortingIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";
import { PaginationType, TablePaginationType } from "@/constants/types";
import { useState } from "react";
import { SearchBox } from "@/components/Search/searchBox";
import CreateGrant from "./createGrant";
import SideDrawer from "@/components/Drawer";
import { getCurrentDate } from "@/helpers/utils";

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
  const [pagination, setPagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 16,
  });

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

  const [openDrawer, closeDrawer] = useState(false);

  const [grantInitialValues] = useState({
    title: "",
    description: "",
    type: "",
    amount: null,
    deadlineDate: getCurrentDate(),
    sendInvitation: false,
    status: true,
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
    showRowCheckboxes: true,
    showColumnCheckbox: true,
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
            columns={columns}
            data={data}
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
