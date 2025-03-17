import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 order-1">
        <SearchBar />
      </div>
      <div className="col-span-2 order-3">{children}</div>
      <div className="col-span-1 order-2">
        <SideBar />
      </div>
    </div>
  );
}
export default UserDashboardLayout;