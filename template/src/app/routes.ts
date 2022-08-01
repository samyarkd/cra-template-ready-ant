import { BankOutlined } from "@ant-design/icons";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import { RoutesType } from "utils/typesAndInterfaces";

export const routes: RoutesType[] = [
  {
    title: "Page 1",
    path: "page-1",
    Element: Page1,
    icon: BankOutlined,
  },
  {
    title: "Page 2",
    path: "page-2",
    Element: Page2,
    icon: BankOutlined,
  },
];
