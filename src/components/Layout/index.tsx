import React from "react";
import Header from "../Header";

interface ILayout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Child: React.ComponentType<any>; 
}

const Layout = ({ Child }: ILayout) => {
  return (
    <>
      <Header />
      <Child /> 
    </>
  );
};

export default Layout;
