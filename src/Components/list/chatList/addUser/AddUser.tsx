import { collection, getDocs, query, where } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { db } from "../../../../lib/firebase";

function AddUser() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    const { username } = Object.fromEntries(formData);

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSearchResults(users);
      } else {
        setSearchResults([]);
      }
    } catch (e) {
      console.error("Error searching user:", e);
      setError("Failed to search for users. Please try again.");
    } finally {
      setLoading(false);
      // Hide loading spinner or message
    }
  };

  return (
    <div
      className="p-4 sm:p-6 md:p-8 rounded-lg absolute bg-[rgba(17,25,40,0.5)] 
                    top-0 bottom-0 left-0 right-0 m-auto w-[400px] h-[300px]"
    >
      {/* Search Form */}
      <form
        className="flex justify-between gap-3"
        onSubmit={handleSearch}
        name="SearchUser"
      >
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          className="outline-none p-2 sm:p-4 md:p-6 border-0 focus:ring-2 focus:ring-slate-700 
                     rounded-lg text-sm md:text-base lg:text-lg bg-white/90 text-black/70"
        />
        <button
          type="submit"
          className="p-3 sm:p-4 md:p-6 bg-blue-600 hover:bg-blue-700 
                     text-white text-sm md:text-base lg:text-lg rounded-md transition-colors"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <p className="text-white text-center mt-4">Searching for users...</p>
      )}

      {/* Error State */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Search Results */}
      {!loading && searchResults.length > 0
        ? searchResults.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center mb-3"
            >
              <img
              src={user.avatar || "/avatar.png"}
                alt={user.username}
                className="w-16 h-16 object-cover rounded-full border-2 border-white/50"
              />
              <h3 className="text-sm md:text-base lg:text-lg">
                {user.username}
              </h3>
              <button
                className="p-3 bg-blue-600 hover:bg-blue-700 
                         text-white text-sm md:text-base lg:text-lg rounded-md transition-colors"
              >
                Add user
              </button>
            </div>
          ))
        : !loading &&
          searchResults.length === 0 && (
            <p className="text-white/80 text-sm md:text-base mt-4">
              No users found. Try a different username.
            </p>
          )}
    </div>
  );
}

export default AddUser;
