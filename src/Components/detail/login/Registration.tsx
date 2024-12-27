import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth, db } from "../../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../../lib/upload";

async function Registration(
  username: FormDataEntryValue,
  file: File,
  email: FormDataEntryValue,
  password: FormDataEntryValue
): Promise<string> {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.toString(),
      password.toString()
    );
    // Handle file upload
    let downloadURL: string = "";
    if (file) {
      try {
        downloadURL = await upload(file, userCredential.user.uid);
        console.log("File uploaded successfully:", downloadURL);
      } catch (uploadError) {
        // Roll back user registration if upload fails
        await userCredential.user.delete();
        console.error(
          "File upload failed, rolling back user registration:",
          uploadError
        );
        throw new Error("File upload failed, user registration rolled back.");
      }
    }
    // Set user data in Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      username,
      email,
      id: userCredential.user.uid,
      blocked: [],
      avatar: downloadURL,
    });

    // Set user chat data in Firestore
    await setDoc(doc(db, "userchats", userCredential.user.uid), {
      chats: [],
    });

    // If everything succeeds, resolve the promise
    return "User created successfully!";
  } catch (error) {
    console.error("Registration Error:", error);
    throw new Error(
      error instanceof Error ? error.message : "An unexpected error occurred."
    );
  }
}

export default Registration;
