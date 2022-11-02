import { useStore } from "@/store/store";
import { Layout } from "antd";
import AppDrawer from "./components/Drawer";
import AppMenu from "./components/Menu";

const { Sider } = Layout;

const Sidebar = () => {
  const collapsed = useStore((state) => state.collapsed);
  const toggle = useStore((state) => state.toggle);

  return (
    <>
      <Sider
        className="sidebar"
        collapsible
        onCollapse={toggle}
        collapsed={collapsed}
        width={260}
        breakpoint="lg"
      >
        <div className="logo">LOGO</div>
        <AppMenu />
      </Sider>
      <AppDrawer />
    </>
  );
};

export default Sidebar;
