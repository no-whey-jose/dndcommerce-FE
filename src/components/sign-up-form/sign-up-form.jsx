import { useEffect, useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isDisabled, setIsDisabled] = useState(true);
  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    if (
      password === confirmPassword &&
      password !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formFields]);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.error('User sign up encountered an error', error);
    }
  };

  return (
    <div className="sign-up-form-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url('/login/sign-up.webp')`,
        }}
      />
      <div className="sign-up-body-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            required
            onChange={handleChange}
            value={displayName}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={password}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required
            onChange={handleChange}
            value={confirmPassword}
          />
          <Button type="submit" disabled={isDisabled}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
