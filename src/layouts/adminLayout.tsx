import { Header } from "@/components/Header";
import { LeftMenu } from "@/components/LeftMenu";

import "./style.css";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="dashboard">
        <div className="sidebar">
          <LeftMenu />
        </div>
        <div> {children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
