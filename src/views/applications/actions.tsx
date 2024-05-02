import { ActionMenu } from "@/components/ActionMenu";
import { APPLICATION_TYPE } from "./types";

export const TableActionsRow = ({
  applicationType,
}: {
  applicationType: string;
}) => {
  const ActionMenus = {
    [APPLICATION_TYPE.ADMIN_GRANT_APPLICATION]: [
      {
        label: "View Detail",
        value: "detail",
      },
      {
        label: "Approve",
        value: "approve",
      },
      {
        label: "Reject",
        value: "reject",
      },
    ],

    [APPLICATION_TYPE.ADMIN_APPLICATION]: [
      {
        label: "View Application",
        value: "view_application",
      },
      {
        label: "Edit",
        value: "edit",
      },
      {
        label: "Delete",
        value: "delete",
      },
    ],
  };

  return (
    <ActionMenu
      options={ActionMenus[applicationType]}
      clickHandler={(value) => console.log(value)}
    />
  );
};
