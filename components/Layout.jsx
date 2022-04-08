import Footer from "./Footer";
import Featured from "./Featured";

const Layout = ({ children }) => {
  return (
    <>
        <Featured/>
      {children}
      <Footer />
  );
};

export default Layout;