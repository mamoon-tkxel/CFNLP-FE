import { CustomTabs } from "@/components/Tabs";

const TABS = [
  {
    label: "All Applications",
    value: "all",
  },
  {
    label: "Accepted",
    value: "accepted",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

export const ApplicationTabs = ({
  onChange,
}: {
  onChange: (value: string | number) => void;
}) => {
  return <CustomTabs tabs={TABS} onChange={onChange} />;
};
