import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import subscribedEmail from "./sanity/subscribedEmail";
import course from "./sanity/course";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

import { apiVersion, projectId, dataset } from "./sanity/env";
import applicant from "./sanity/applicant";
import timeSlot from "./sanity/lib/timeSlot";
import mondaySchedule from "./sanity/lib/mondaySchedule";
import tuesdaySchedule from "./sanity/lib/tuesdaySchedule";
import wednesdaySchedule from "./sanity/lib/wednesdaySchedule";
import thursdaySchedule from "./sanity/lib/thursdaySchedule";
import fridaySchedule from "./sanity/lib/fridaySchedule";
import foundation from "./sanity/lib/foundation";
import scholarshipApplicants from "./sanity/lib/scholarshipApplicants";
import instructors from "./sanity/lib/instructors";
import event from "./sanity/lib/event"
import bootcampPrep from "./sanity/lib/bootcampPrep";
import eventApplicant from "./sanity/lib/eventApplicant";
import workshopApplicant from "./sanity/lib/workshopApplicant";
import workshop from "./sanity/lib/workshop";

export default defineConfig({
  name: "default",
  title: "Code Academy",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [subscribedEmail, course, applicant, timeSlot,mondaySchedule,tuesdaySchedule,wednesdaySchedule,thursdaySchedule,fridaySchedule,foundation,scholarshipApplicants,instructors,event,workshop,bootcampPrep,eventApplicant,workshopApplicant],
  },
});
