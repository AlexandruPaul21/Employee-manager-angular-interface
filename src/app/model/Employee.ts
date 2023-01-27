import { Team } from "./Team";

export class Employee {
  id : number | undefined;
  firstName : string | undefined;
  lastName : string | undefined;
  developerFunction : string | undefined;
  admFunction : any;
  baseSalary : number | undefined;
  team : Team = new Team();
}
