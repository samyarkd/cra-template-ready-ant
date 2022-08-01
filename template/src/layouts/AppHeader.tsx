import { Button, Layout } from "antd";
import useSidebarContext from "hooks/useContext/useSidebarContext";
const { Header } = Layout;

const AppHeader = () => {
  const { toggle } = useSidebarContext();

  return (
    <Header className="header">
      <Button type="primary" onClick={toggle}>
        Collapse
      </Button>
      header
    </Header>
  );
};

export default AppHeader;
