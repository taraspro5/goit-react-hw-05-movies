import { Formik, Field, Form } from 'formik';

export default function Movies() {
  return (
    <Formik
      initialValues={{
        toSearch: '',
      }}
      onSubmit={values => {
        console.log(values.toSearch);
      }}
    >
      <Form className="SearchForm">
        <label className="SearchForm-input">
          <Field
            name="toSearch"
            type="text"
            className="input SearchForm-input"
            autoComplete="off"
            autoFocus
            placeholder="Search movie by name..."
            required
          />
        </label>
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </Form>
    </Formik>
  );
}
