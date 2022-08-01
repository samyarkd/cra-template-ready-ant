import { Drawer } from "antd";
import { antdConfig } from "app/antd.config";
import useSidebarContext from "hooks/useContext/useSidebarContext";
import AppMenu from "./AppMenu";

const AppDrawer = () => {
  const { collapsed, toggle } = useSidebarContext();
  return (
    <Drawer
      title="Basic Drawer"
      width={200}
      onClose={toggle}
      placement={antdConfig.direction === "rtl" ? "right" : "left"}
      visible={collapsed}
    >
      <AppMenu />
    </Drawer>
  );
};

export default AppDrawer;
