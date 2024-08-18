// icons
// /""m Aarrowlitika from "../assets/icons/analytics.svg?react";
// import Lid from "../assets/icons/lid.svg?react";
// import Finance from "../assets/icons/finance.svg?react";
// import Students from "../assets/icons/student.svg?react";
// import Groups from "../assets/icons/group.svg?react";
// import Course from "../assets/icons/course.svg?react";
// import HR from "../assets/icons/hr.svg?react";
// import Settings from "../assets/icons/setting.svg?react";
// Components
// import Generics from "../view/Generics";
// import { AnalitikaView } from "../view/AnalitikaView";
// import LidsAllView from "../views/LidsAll";
// import FirstClassView from "../views/FirstClass";
// import NewStudentsView from "../views/NewStudents";
// import GroupsView from "../views/GroupsView";
// import GroupsRoomView from "../views/GroupsRoom";
import arrow from "../assets/icons/arrow.svg?react";
import Products from "../components/products";

const sidebar = [
  {
    id: 1,
    title: "Mahsulotlar",
    path: "/products",
    icon: arrow,
    isPrivate: true,
    element: <Products />,
  },
  {
    id: 2,
    title: "Lidlar", // buyurtma
    path: "/lidlar",
    isPrivate: true,
    icon: arrow,
    element: <h1>home</h1>,
    role: ["admin"],
    children: [
      {
        id: `2-1`,
        title: "Barcha Lidlar",
        path: "/lidlar/all-lids",
        isPrivate: true,
        element: <h1>home</h1>,
        role: ["admin", "manager"],
      },
      {
        id: `2-2`,
        title: "Birinchi Dars",
        path: "/lidlar/first-class",
        isPrivate: true,
        element: <h1>home</h1>,
        role: ["admin", "manager"],
      },
      {
        id: `2-3`,
        title: "Yangi Talabalar",
        path: "/lidlar/new-students",
        isPrivate: true,
        element: <h1>home</h1>,
        role: ["admin", "manager"],
      },
    ],
  },
];

export default sidebar;
