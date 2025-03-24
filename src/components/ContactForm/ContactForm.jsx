import { Formik , Form,  Field} from 'formik';
import css from "./ContactForma.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import {nanoid} from 'nanoid';


const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
 });

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm ({onSubmit}) {
   const handleSubmit = (values, actions ) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
     onSubmit(newContact);
     actions.resetForm();
    
   }

  return(
    <div className={css.containerForm}>
    <Formik initialValues={initialValues}
     onSubmit={handleSubmit}
     validationSchema={FeedbackSchema}>

    <Form className={css.form}>
      <div>
          <label htmlFor="name">Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error}  name="name" component="span" />
      </div>
    
        <div>
           <label htmlFor="number">Number</label>
           <Field className={css.input} type="text" name="number" />
           <ErrorMessage className={css.error}  name="number" component="span" />
        </div>
      
      <button className={css.formButton} type="submit">Add contact</button>
    </Form>
   
    </Formik>
   
    </div>
  )
};