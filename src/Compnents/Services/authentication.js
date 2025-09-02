import toast from "react-hot-toast";
import { app } from "../../../Config/Config.js";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

const auth = getAuth(app);



// Register a new user
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        // Update user profile with display name
        await updateProfile(user, {
            displayName: name,
        });

        toast.success("User created successfully");
        console.log("User:", user);
    } catch (error) {
        toast.error(error.message);
        console.error("Register Error:", error.code, error.message);
    }
};

// Log in existing user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        toast.success("Logged in successfully");
        return user.email; // safer than accessing internal `reloadUserInfo`
    } catch (error) {
        toast.error(error.message);
        console.error("Login Error:", error.code, error.message);
    }
};

// Log out the user
export const logoutUser = async () => {
    try {
        await signOut(auth);
        toast.success("Signed out successfully");
        console.log("Sign out successful");
    } catch (error) {
        toast.error("Error signing out");
        console.error("Logout Error:", error);
    }
};
