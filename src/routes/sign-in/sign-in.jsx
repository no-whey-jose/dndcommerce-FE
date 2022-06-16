import SignUpForm from '../../components/sign-up-form/sign-up-form';
import Button from '../../components/button/button';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return <div>
    <h1>Sign In Page</h1>
    <Button buttonType='google' onClick={signInWithGoogle}>Sign In with Google</Button>
    <SignUpForm />
  </div>;
};

export default SignIn;
