//import styles
import "./Container.css";

const Container = ({ background, children }) => {
  return <div className={`container ${background}`}>{children}</div>;
};

export default Container;
