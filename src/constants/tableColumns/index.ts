import { APPLICATION_TYPE } from "@/views/applications/types";

export const ADMIN_GRANT_COLUMNS = [
  { key: "title", label: "Grant Title" },
  { key: "type", label: "Grant Type" },
  { key: "amount", label: "Grant Amount" },
  { key: "applications", label: "Applications" },
  { key: "deadLine", label: "Deadline" },
  { key: "status", label: "Status" },
];

interface AdminApplicationColumns {
  [key: string]: { key: string; label: string }[];
}

export const ADMIN_APPLICATION_COLUMNS: AdminApplicationColumns = {
  [APPLICATION_TYPE.ADMIN_APPLICATION]: [
    { key: "organizationCounty", label: "Organization and County" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "grant", label: "Grant" },
    { key: "appliedDate", label: "Applied On" },
    { key: "status", label: "Status" },
  ],
  [APPLICATION_TYPE.ADMIN_GRANT_APPLICATION]: [
    { key: "organizationCounty", label: "Organization and County" },
    { key: "contactPerson", label: "Contact Person" },
    { key: "appliedDate", label: "Applied On" },
    { key: "status", label: "Status" },
  ],
};

export const ADMIN_COUNTY_PROFILE_COLUMNS = [
  { key: "name", label: "County Name" },
  { key: "person", label: "County Person" },
  { key: "structure", label: "Program Structure" },
  { key: "funding", label: "Funding Sources" },
  { key: "last_update", label: "Last Update" },
];

export const ADMIN_USERS_COLUMNS = [
  { key: "name", label: "Full Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "status" },
];

export const ADMIN_REPORTS_COLUMNS = [
  { key: "organizationCounty", label: "Organization and County" },
  { key: "submittedBy", label: "Submitted By" },
  { key: "chapter", label: "Chapter/Period" },
  { key: "dueDate", label: "Due Date" },
  { key: "submittedOn", label: "Submitted On" },
  { key: "status", label: "Status" },
];
