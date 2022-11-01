import Lang from "@/lang/langs";
import { Spin } from "antd";

const AppLoading = () => {
  return (
    <div className="app-loading">
      <Spin tip={Lang.default.loading_page} />
    </div>
  );
};

export default AppLoading;
