import './button.styles.scss';

const BUTTON_STYLE_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ buttonType, children, ...buttonProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_STYLE_TYPES[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
