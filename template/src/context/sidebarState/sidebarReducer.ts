import { SidebarActionCreator } from "context/actionCreators";
import { SidebarActionTypes } from "context/actionTypes";
import { SidebarContextType } from "context/contextTypes";

function sidebarReducer(state: SidebarContextType, action: SidebarActionTypes) {
  switch (action.type) {
    case SidebarActionCreator.TOGGLE:
      return {
        ...state,
        collapsed: !state.collapsed,
      };

    default:
      return state;
  }
}

export default sidebarReducer;
