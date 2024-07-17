import InputForm from "./InputForm";
import PropType from "prop-types";

export default function FormTemplate(props) {
  const { control } = props;
  switch (control) {
    case "input":
      return <InputForm {...props} />;

    default:
      break;
  }
}

FormTemplate.propTypes = {
  control: PropType.string.isRequired,
};
