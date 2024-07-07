import { LOG_IN, LOG_OUT, UPDATE_ROLE, UPDATE_USERNAME } from "../constants";

export function log_in_redux(requiredParameters: any) {
  return {
    type: LOG_IN,
    data: requiredParameters,
  };
}

export function log_out_redux() {
  return {
    type: LOG_OUT,
    data: null,
  };
}

export function update_role_redux(role: "superadmin" | "admin" | "user") {
  return {
    type: UPDATE_ROLE,
    data: role,
  };
}

export function update_username_redux(username: string) {
  return {
    type: UPDATE_USERNAME,
    data: username,
  };
}
