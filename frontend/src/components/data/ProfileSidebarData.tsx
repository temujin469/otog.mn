import { BiHomeAlt} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BsCalendarCheck} from "react-icons/bs";

export const SidebarData=[
    {
        title: "Нүүр хуудас",
        path: "/profile",
        icon: <BiHomeAlt/>,
      },
      {
        title: "Захиалга",
        path: "orders",
        icon: <BsCalendarCheck/>,

      },
      {
        title: "Тохиргоо",
        path: "settings",
        icon: <FiSettings/>,

      },
]