import Lang from "@/lang/langs";
import { Spin } from "antd";

const LayoutLoading = () => {
  return (
    <div className="layoutLoading">
      <Spin size="large" tip={Lang.components.default.loading_data} />
    </div>
  );
};

export default LayoutLoading;
