import "../../styles/components-styles/basic_components-styles/Button-styles.scss";

const Button = ({ onClick, buttonType, children, ...rest }) => {
  let buttonClass = "";

  if (
    buttonType === "info" ||
    buttonType === "alert" ||
    buttonType === "success"
  ) {
    buttonClass = buttonType;
  }

  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
