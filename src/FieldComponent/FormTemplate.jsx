import InputForm from "./InputForm";

export default function FormTemplate(props) {
  const { control } = props;
  switch (control) {
    case "input":
      <InputForm {...props} />;
      break;

    default:
      break;
  }
}
