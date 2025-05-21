import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function loginUser(email, password){
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        return userCred;
    } catch (error) {
        console.log("ERROR while Registering: ", error);
        throw new Error(error)
    }
}

export async function registerUser(email, password){
    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        return userCred;
    } catch (error) {
        console.log("ERROR while log in: ", error);
        throw new Error(error)
    }
}