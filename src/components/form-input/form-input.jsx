import './form-input.styles.scss';

const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="form-input-group">
      <input className="form-input-input" {...inputProps} />
      {label && (
        <label
          className={`${
            inputProps.value.length ? 'shrink' : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
