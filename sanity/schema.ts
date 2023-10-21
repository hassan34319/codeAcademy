import fridaySchedule from "./lib/fridaySchedule";
import mondaySchedule from "./lib/mondaySchedule";
import thursdaySchedule from "./lib/thursdaySchedule";
import timeSlot from "./lib/timeSlot";
import tuesdaySchedule from "./lib/tuesdaySchedule";
import wednesdaySchedule from "./lib/wednesdaySchedule";
import subscribedEmail from "./subscribedEmail";


export const schema = {
  types: [subscribedEmail,timeSlot,mondaySchedule,tuesdaySchedule,wednesdaySchedule,thursdaySchedule,fridaySchedule],
}
