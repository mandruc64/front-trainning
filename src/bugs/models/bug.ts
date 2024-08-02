import {User} from "../../user/models/user";
import {Severity} from "./severity";

export interface Bug {
  severity: Severity;
  description: string;
  assignedUser: User;
}
