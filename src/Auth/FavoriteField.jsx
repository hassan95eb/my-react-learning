import { ErrorMessage, Field } from "formik";

export default function FavoriteField(props) {
  const { form, push, remove } = props;
  const { favorite } = form.values;

  return (
    <div>
      <i className="fa fa-plus" onClick={() => push("")}></i>
      {favorite.map((f, i) => (
        <div className="my-1" key={i}>
          <Field
            type="text"
            className="form-control"
            id={`exampleInputfavorite-${i}`}
            name={`favorite[${i}]`}
          />
          {favorite.length > 1 ? (
            <i className="fa fa-minus" onClick={() => remove(i)}></i>
          ) : null}
          <ErrorMessage name={`favorite[${i}]`} />
        </div>
      ))}
    </div>
  );
}
