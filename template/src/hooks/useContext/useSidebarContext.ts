import SidebarContext from "context/sidebarState/SidebarContext";
import { useContext } from "react";

const useSidebarContext = () => {
  const sidebar = useContext(SidebarContext);
  return sidebar;
};

export default useSidebarContext;
