import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { signOut } from "firebase/auth";

interface User {
  id: string;
  [key: string]: any; // Additional dynamic properties
}

type Store = {
  currentUser: User | null;
  isLoading: boolean;
  fetchUserInfo: (uid: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create the Zustand store
const useUserStore = create<Store>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: string) => {
    if (!uid) {
      set({ currentUser: null, isLoading: false });
      return;
    }

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        set({
          currentUser: { id: uid, ...docSnap.data() } as User,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      set({ currentUser: null, isLoading: false });
    }
  },
  logout: async () => {
    await signOut(auth);
    set({ currentUser: null, isLoading: false });
  },
}));

export default useUserStore;
