import { SidebarActionCreator } from "context/actionCreators";
import { sidebarDefaultValues } from "context/defaultValues";
import { FC, useReducer } from "react";
import { Props } from "utils/typesAndInterfaces";
import SidebarContext from "./SidebarContext";
import sidebarReducer from "./sidebarReducer";

const SidebarState: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, sidebarDefaultValues);

  const toggle = () => {
    dispatch({
      type: SidebarActionCreator.TOGGLE,
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        toggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
