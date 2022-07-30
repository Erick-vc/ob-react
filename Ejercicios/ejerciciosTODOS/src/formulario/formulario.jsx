import React from "react";

// npm i --save formik yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Clasese
import { PRIO } from "../clases/Tarea";

const Formulario = () => {
  const iniciarValores = {
    nombre: "",
    descripcion: "",
    prioridad: PRIO.MEDIA,
  };

  // Hacemos uso del Yup
  const registroTareas = Yup.object().shape({
    nombre: Yup.string()
      .min(4, "Nombre muy corto")
      .max(10, "Nombre muy largo")
      .required("Se necesita escribir una tarea"),
    descripcion: Yup.string()
      .required("Se necesita descripción de la tarea")
      .min(4, "Descripción muy corta"),
    prioridad: Yup.string()
      .oneOf(
        [PRIO.BAJA, PRIO.MEDIA, PRIO.ALTA],
        "Debes seleccionar una prioridad"
      )
      .required("Se necesita una prioridad"),
  });

  const submit = (value) => {
    alert("Register user");
  };

  return (
    <div>
      <h4>REGISTRO DE TAREAS</h4>
      <Formik
        // Validamos
        initialValues={iniciarValores}
        validationSchema={registroTareas}
        // Tiempo para que ocurra el envio de tareas
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          valus,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            {/* NOMBRE DE TAREA */}
            <label htmlFor="nombre">Nombre Tarea</label>
            <Field id="nombre" type="text" name="nombre" placeholder="Tu tarea"/>
            {/* Error de nombre de tarea */}
            {errors.nombre && touched.nombre && (
              <ErrorMessage name="nombre" component="div"></ErrorMessage>
            )}

            {/* DESCRIPCION */}
            <label>Descripcion</label>
            <Field id="descripcion" type="text" name="descripcion" placeholder="Descripcion de tarea"
            />
            {/* Error de la descripcion */}
            {errors.descripcion && touched.descripcion && (
              <ErrorMessage name="descripcion" component='div'></ErrorMessage>
            )}
                            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending your credential</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
