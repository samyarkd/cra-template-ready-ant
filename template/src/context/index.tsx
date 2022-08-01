import { FC } from "react";
import { Props } from "utils/typesAndInterfaces";
import SidebarState from "./sidebarState/SidebarState";

const Context: FC<Props> = ({ children }) => {
  return <SidebarState>{children}</SidebarState>;
};

export default Context;
