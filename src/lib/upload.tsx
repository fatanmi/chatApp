import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

async function upload(file: File, userId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      if (!file || file.size === 0) {
        return reject(new Error("No file provided or file is empty."));
      }

      const fileRef = ref(storage, `images/${userId}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      const timeout = setTimeout(() => {
        reject(new Error("Upload timed out."));
      }, 100000);
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
        (error) => {
          // Handle upload errors
          if (error instanceof Error) {
            console.error("Upload error:", error.message);
            reject(error);
          } else {
            console.error("Unknown upload error:", error);
            reject(new Error("Unknown upload error occurred"));
          }
        },
        async () => {
          clearTimeout(timeout);
          // Handle successful uploads on complete
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at:", downloadURL);
            resolve(downloadURL);
          } catch (error) {
            if (error instanceof Error) {
              console.error("Error getting download URL:", error.message);
              reject(error);
            } else {
              console.error("Unknown error while getting download URL:", error);
              reject(
                new Error("Unknown error occurred while getting download URL")
              );
            }
          }
        }
      );
    } catch (err) {
      console.error("Unexpected error during upload setup:", err);
      reject(
        err instanceof Error ? err : new Error("Unexpected error occurred")
      );
    }
  });
}

export default upload;
