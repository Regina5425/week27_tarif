import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const handleSubmit = () => {
    alert("Sended");
  };

  const SignupSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({errors, touched}) => (
				<Form>
        <Field type='email' name='email' placeholder='Email' />
				{errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Field type='password' name='password' placeholder='Password' />
				{errors.password && touched.password ? <div>{errors.password}</div> : null}
        <button type='submit'>Submit</button>
      </Form>
			)}
    </Formik>
  );
};

export default FormikForm;
