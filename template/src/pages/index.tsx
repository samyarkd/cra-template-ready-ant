import { useEffect } from "react";
import { useNavigate } from "react-router";

const index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("app");
  }, []);

  return <div></div>;
};

export default index;
