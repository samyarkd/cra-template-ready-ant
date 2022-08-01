import { SidebarContextType } from "context/contextTypes";
import { sidebarDefaultValues } from "context/defaultValues";
import { createContext } from "react";

const SidebarContext = createContext<SidebarContextType>(sidebarDefaultValues);

export default SidebarContext;
