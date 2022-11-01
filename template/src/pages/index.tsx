import { useStore } from "@/store/store";

const index = () => {
  const state = useStore();

  return (
    <>
      <div>{JSON.stringify(state.collapsed)}</div>;
    </>
  );
};

export default index;
