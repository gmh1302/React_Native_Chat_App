import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, auth } from 'firebase/auth';
import config from '../firebase.json';

const app = initializeApp(config);

const Auth = app.auth();

export const signin = async ({ email, password }) => {
    const { user } = await signInWithEmailAndPassword(email, password);
    return user;
}