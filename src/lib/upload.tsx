import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTask,
} from "firebase/storage";
import { storage } from "./firebase";

async function upload(file: File, userId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error("No file provided for upload"));
    }

    const fileRef = ref(storage, `images/${userId}`);
    const uploadTask: UploadTask = uploadBytesResumable(fileRef, file);

    // Monitor state changes, errors, and completion of the upload
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Monitor progress
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error: unknown) => {
        // Handle upload errors
        if (error instanceof Error) {
          console.error("Upload error:", error.message);
          reject(error); // Reject the promise on error
        } else {
          console.error("Unknown upload error:", error);
          reject(new Error("Unknown upload error occurred"));
        }
      },
      async () => {
        // Handle successful uploads on complete
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at:", downloadURL);
          resolve(downloadURL); // Resolve the promise with the download URL
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error("Error getting download URL:", error.message);
            reject(error); // Reject the promise on error
          } else {
            console.error("Unknown error while getting download URL:", error);
            reject(
              new Error("Unknown error occurred while getting download URL")
            );
          }
        }
      }
    );
  });
}

export default upload;
