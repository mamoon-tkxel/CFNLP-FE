import { Stack, Typography } from "@mui/material";
import { ApplicationFilters } from "./filters";
import { ApplicationTabs } from "./tabs";
import { ApplicationListing } from "./listing";
import useAdminApplication from "@/hooks/useAdminApplication";
import { useNavigate } from "react-router-dom";

type APPLICATION_TYPES = {
  pageTitle?: string;
  applicationType?: string;
};

const Applications = ({
  pageTitle = "Applications",
  applicationType = "AdminApplications",
}: APPLICATION_TYPES) => {
  const naviagte = useNavigate();
  const { pagination, handlePageChange, TableData } = useAdminApplication();

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
            <span onClick={() => naviagte(-1)}>
              {" "}
              {applicationType === "AdminGrantApplication" ? "<--" : ""}
            </span>
            {pageTitle}
          </Typography>
        </Stack>
        <ApplicationTabs onChange={(value) => console.log(value)} />
        <Stack
          borderRadius="24px"
          gap="24px"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
          p="24px 0 0 0"
        >
          <ApplicationFilters />
          <ApplicationListing
            applicationType={applicationType}
            data={TableData}
            pagination={pagination}
            loading={false}
            handlePageChange={handlePageChange}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Applications;
