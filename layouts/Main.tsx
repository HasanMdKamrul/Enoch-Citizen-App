import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Main;
