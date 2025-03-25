import { IMenuItem } from "@/types/menu.types";
import { HomeIcon, IdentificationIcon } from "@heroicons/react/24/outline";

export const menuItems: IMenuItem[] = [
  {
    title: "Trang chủ",
    icon: <HomeIcon className="menu-icon size-5" />,
    url: "/",
  },
  {
    title: "Liên hệ",
    icon: <IdentificationIcon className="menu-icon size-5" />,
    url: "/lien-he",
  },
];
