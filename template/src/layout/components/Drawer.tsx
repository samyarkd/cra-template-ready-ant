import { antdConfig } from "@/antd.config";
import { useStore } from "@/store/store";
import { Drawer } from "antd";
import Menu from "./Menu";

const AppDrawer = () => {
  const { collapsed, toggle } = useStore();

  return (
    <Drawer
      width={200}
      onClose={toggle}
      placement={antdConfig.direction === "rtl" ? "right" : "left"}
      open={collapsed}
    >
      <Menu theme="light" />
    </Drawer>
  );
};

export default AppDrawer;
