import { ErrorMessage, FastField } from "formik";
import PropTypes from "prop-types";

export default function InputForm(props) {
  const { type, name, label } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField
        type={type}
        className="form-control"
        id={name}
        name={name}
        aria-describedby="nameHelp"
      />
      <ErrorMessage name={name} />
    </div>
  );
}

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
