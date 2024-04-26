import { Header } from "@/components/Header";
import { LeftMenu } from "@/components/LeftMenu";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LeftMenu />
      <div>
        <Header />
        <div> {children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
