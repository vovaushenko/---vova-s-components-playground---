import React from 'react';
import * as Styled from './SlidingForm.styles';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormikInputField from '../Formik/FormikTextInput/FormikTextInput';
import GenericButton from '../../Buttons/GenericButton/GenericButton';
import SimpleCheckbox from '../Checkbox/SimpleCheckbox/SimpleCheckbox';
import MaterialCheckbox from '../Checkbox/MaterialCheckbox/MaterialCheckbox';

const validationSchema = yup.object({
  name: yup.string().required('Please introduce Yourself'),
  email: yup.string().email('Email is incorrect').required('Please add email'),
  message: yup.string().required('Please leave some message'),
});

/**
 *Renders sliding multi-step for
 *@function SlidingForm
 *@returns {JSX.Element} - Rendered SlidingForm component
 */
const SlidingForm = (): JSX.Element => {
  return (
    <Styled.Container>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={async (data) => {
          console.log(data);
        }}
      >
        <Form>
          <Styled.Wrapper>
            <FormikInputField placeholder="name" name="name" type="text" />
            <FormikInputField placeholder="email" name="email" type="text" />
          </Styled.Wrapper>
          <FormikInputField placeholder="message" name="message" type="text" />

          <GenericButton text={'shoot'} type={'submit'} />
          <SimpleCheckbox variant={'fade'} height={24} />
          <SimpleCheckbox variant={'simple'} height={44} />
          <SimpleCheckbox variant={'animated'} height={44} />
          <MaterialCheckbox height={25} />
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default SlidingForm;
