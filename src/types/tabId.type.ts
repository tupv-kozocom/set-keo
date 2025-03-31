import MANAGE_TABS from "@/constants/manageTab";

type TabId = (typeof MANAGE_TABS)[keyof typeof MANAGE_TABS];

export default TabId;
