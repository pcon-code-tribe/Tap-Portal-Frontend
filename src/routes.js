
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import toApply from "views/toApply.js";
import allAppliedList from "views/allAppliedList.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/toApply",
    name: "To Apply",
    icon: "nc-icon nc-tap-01",
    component: toApply,
    layout: "/admin",
  },
 
  {
    path: "/allAppliedList",
    name: "All Applied",
    icon: "nc-icon nc-notes",
    component: allAppliedList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
