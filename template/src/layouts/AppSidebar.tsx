import { Layout } from "antd";
import useSidebarContext from "hooks/useContext/useSidebarContext";
import AppDrawer from "./components/AppDrawer";
import AppMenu from "./components/AppMenu";
const { Sider } = Layout;

const AppSidebar = () => {
  const { collapsed } = useSidebarContext();

  return (
    <>
      <Sider
        theme="light"
        className="sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <AppMenu />
      </Sider>
      <AppDrawer />
    </>
  );
};

export default AppSidebar;
