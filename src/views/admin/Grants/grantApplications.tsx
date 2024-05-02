import Applications from "@/views/applications";
import { APPLICATION_TYPE } from "@/views/applications/types";

const GrantApplications = () => {
  return (
    <Applications
      pageTitle="Traffic Safety"
      applicationType={APPLICATION_TYPE.ADMIN_GRANT_APPLICATION}
    />
  );
};
export default GrantApplications;
