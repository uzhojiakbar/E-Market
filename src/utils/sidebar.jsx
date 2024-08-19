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
    title: "Hisobotlar", // buyurtma
    path: "/hisobot",
    isPrivate: true,
    icon: arrow,
    element: <h1>home</h1>,
    role: ["admin"],
    children: [
      {
        id: `2-1`,
        title: "Kunlik hisobotlar",
        path: "/hisobot/kunlik",
        isPrivate: true,
        element: <h1>home</h1>,
        role: ["admin", "manager"],
      },
      {
        id: `2-2`,
        title: "Oylik Hisobotlar",
        path: "/hisobot/monthly",
        isPrivate: true,
        element: <h1>home</h1>,
        role: ["admin", "manager"],
      },
      {
        id: `2-3`,
        title: "Analiktika",
        path: "/hisobot/analiktik",
        isPrivate: true,
        element: <h1>home</h1>,
        role: ["admin", "manager"],
      },
    ],
  },
];

export default sidebar;
