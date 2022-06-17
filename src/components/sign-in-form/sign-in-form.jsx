import { useState } from 'react';
import { signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import Button from '../../components/button/button';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log('signInResponse', response);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Password is incorrect');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          alert('There was an error logging in to the account');
      }
      console.error('User sign in encountered an error', error);
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-form-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url('/login/sign-in.png')`,
        }}
      />
      <div className="sign-in-body-container">
        <h2>I laready have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Sign In</Button>
          <div className="sign-in-form-button-spacer" />
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
