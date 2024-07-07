import {
  SELECT_CLIENT,
  SELECT_DASHBOARDS_SECTION,
  REFRESH_CLIENT_LIST,
  REFRESH_SUBSCRIPTIONS_LIST,
  SELECT_USERS_SECTION,
  REFRESH_USERS_LIST,
} from "../constants";

export function select_client_redux(client: any) {
  return {
    type: SELECT_CLIENT,
    data: client,
  };
}

export function select_dashboards_section_redux(
  dashboardsSection:
    | {
        type: "add";
        parentId: string;
        selectedId: null;
      }
    | {
        type: "edit";
        parentId: string;
        selectedId: string;
      }
) {
  return {
    type: SELECT_DASHBOARDS_SECTION,
    data: dashboardsSection,
  };
}

export function refresh_client_list_redux() {
  return {
    type: REFRESH_CLIENT_LIST,
    data: {},
  };
}

export function refresh_subscriptions_list_redux() {
  return {
    type: REFRESH_SUBSCRIPTIONS_LIST,
    data: {},
  };
}

export function refresh_users_list_redux() {
  return {
    type: REFRESH_USERS_LIST,
    data: {},
  };
}

export function select_users_section_redux(
  usersSection:
    | {
        type: "add";
        parentId: string;
        selectedId: null;
      }
    | {
        type: "edit";
        parentId: string;
        selectedId: string;
      }
) {
  return {
    type: SELECT_USERS_SECTION,
    data: usersSection,
  };
}
