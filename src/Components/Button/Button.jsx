//import styles
import "./Button.css";

const Button = ({onClick, background, color, padding, title, border }) => {
  return (
    <button
      style={{
        background: background,
        borderBottom: border,
        padding: padding,
        color: color,
      }}
      className="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
