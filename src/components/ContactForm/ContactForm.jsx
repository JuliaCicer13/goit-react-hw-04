import { useId } from "react";
import { Formik , Form,  Field} from 'formik';
import css from "./ContactForma.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

export default function LoginForm ({onAdd}) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const textareaId = useId();
  const selectId = useId();

  const FeedbackSchema = Yup.object().shape({
     username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
     number: Yup.string().email("Must be a valid email!").required("Required"),
     message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
     level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")       
    });

   const initialValues = {
     username: "",
     number: "",
     message: "",
     level:"good"
   }
   const handleSubmit = (values, actions ) => {
     actions.resetForm()
     console.log(values)
   }

  return(
    <div className={css.containerForm}>
    <Formik 
     initialValue={{initialValues}}
     onSubmit = {handleSubmit}
     validationSchema={FeedbackSchema}>

    <Form className={css.form} onSubmit={handleSubmit}>
      <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field className={css.input} type="text" name="username" id={nameFieldId} />
          <ErrorMessage className={css.error}  name="username" component="span" />
      </div>
    
        <div>
           <label htmlFor={numberFieldId}>Number</label>
           <Field className={css.input} type="text" name="number" id={numberFieldId} />
           <ErrorMessage className={css.error}  name="number" component="span" />
        </div>

      <div>
         <label htmlFor={textareaId}>Message</label>
         <Field as="textarea" name="message" id={textareaId} rows="5"></Field>
         <ErrorMessage className={css.error} name="username" component="span" />
      </div>
        

        <div>
            <label htmlFor={selectId}>Select</label>
                <Field as="select">
                    <option value="o1">Option 1</option>
	                  <option value="o2">Option 2</option>
	                  <option value="o3">Option 3</option>
                   <ErrorMessage className={css.error}  name="username" component="span" />
                 </Field> 
        </div>
    
      <button className={css.formButton} onClick={onAdd}></button>
    </Form>
   
    </Formik>
   
    </div>
  )
};