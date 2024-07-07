import {
  REFRESH_CLIENT_LIST,
  REFRESH_SUBSCRIPTIONS_LIST,
  REFRESH_USERS_LIST,
  SELECT_CLIENT,
  SELECT_DASHBOARDS_SECTION,
  SELECT_USERS_SECTION,
} from "../constants";

const initialState = {
  listRefreshTrigger: 0, // for client list
  listRefreshTrigger2: 0, // for subscription list
  listRefreshTrigger3: 0, // for user list
  selectedClient: null,
  dashboardsSection: {
    type: "add", //| "edit"
    parentId: null, // client | category | sub category | item - to be use in repective routes
    selectedId: null, // category | sub category | item - to be use in repective routes
  },
  usersSection: {
    type: "add", //| "edit"
    parentId: null, // client - to be use in repective routes
    selectedId: null, // user - to be use in repective routes
  },
};

type Action = {
  type: string;
  data: any;
};

export const clientReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return {
        ...state,
        selectedClient: action.data,
      };
    case SELECT_DASHBOARDS_SECTION:
      return {
        ...state,
        dashboardsSection: action.data,
      };
    case REFRESH_CLIENT_LIST:
      return {
        ...state,
        listRefreshTrigger: state.listRefreshTrigger + 1,
      };
    case REFRESH_SUBSCRIPTIONS_LIST:
      return {
        ...state,
        listRefreshTrigger2: state.listRefreshTrigger2 + 1,
      };
    case SELECT_USERS_SECTION:
      return {
        ...state,
        usersSection: action.data,
      };
    case REFRESH_USERS_LIST:
      return {
       ...state,
        listRefreshTrigger3: state.listRefreshTrigger3 + 1,
      };
    default:
      return state;
  }
};
