import { Table } from "antd";
import { useNavigate } from "react-router";

const hello = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Table
        dataSource={[
          {
            key: "1",
            name: "قرارداد اول",
          },
        ]}
        columns={[
          {
            dataIndex: "name",
            title: "عنوان",
            render: (value) => (
              <div onClick={() => navigate("edit")}>{value}</div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default hello;
