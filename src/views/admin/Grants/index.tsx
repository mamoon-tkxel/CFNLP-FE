import { addIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";
import { PaginationType } from "@/constants/types";
import { useState } from "react";
import CreateGrant from "./createGrant";
import SideDrawer from "@/components/Drawer";

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
    totalRecords: 16,
  });

  const [openDrawer, closeDrawer] = useState(false);

  const [grantInitialValues] = useState({
    title: "",
    description: "",
    type: "",
    amount: null,
    deadlineDate: new Date(),
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
  };

  return (
    <>
      <Stack>
        <Stack
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          padding="24px 24px 32px 24px"
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
      </Stack>
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
      <SideDrawer open={openDrawer} onClose={() => closeDrawer(false)}>
        <CreateGrant initialValues={grantInitialValues} />
      </SideDrawer>
    </>
  );
};

export default Grants;
