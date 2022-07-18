import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};

export default SharedLayout;
