import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

export default function UserDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-3">
          <div className="col-span-3 order-1">
            <SearchBar />
          </div>
          <div className="col-span-2 order-3">{children}</div>
          <div className="col-span-1 order-2">
            <SideBar />
          </div>
        </div>
      </body>
    </html>
  );
}
