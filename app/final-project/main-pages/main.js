"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../_utils/firebase";

export default function MainPage( { personInfo, onSubmit } ) {
  const { user } = useUserAuth();

  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const [info, setInfo] = useState({
    name: "",
    gender: "",
    weight: "",
    height: "",
    age: "",
  });

  const hasProfile = profile !== null;

  useEffect(() => {
  if (!user || !user.uid) return;

  (async () => {
    try {
      setLoadingProfile(true);

      const snap = await getDoc(doc(db, "users", user.uid));
      let data = null;
      if (snap.exists()) {
        data = snap.data();}

      setProfile(data);

      if (data) {
        setInfo({
          name: user?.displayName ?? "" ,
          gender: data.gender ?? "",
          weight: String(data.weight ?? ""),
          height: String(data.height ?? ""),
          age: String(data.age ?? ""),
        });

      }
    } catch (err) {
      console.error("Profile failed", err);
    }
      setLoadingProfile(false);
    })();
    }, [user?.uid]);


  const handle = (key) => (event) =>
    setInfo((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user || !user.uid) {
      alert("You must be signed in.");
      return;
    }

    const payload = {
      ...info,
      weight: Number(info.weight),
      height: Number(info.height),
      age: Number(info.age),
      updatedAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", user.uid), payload, { merge: true });

    setProfile(payload);

    alert(hasProfile ? "Information Updated!" : "Information Saved!");

    window.location.reload(true)
  };

  if (!user) return <p className="p-4">Please sign in.</p>;
  if (loadingProfile) return <p className="p-4">Loading profile...</p>;

  return (
    <form
      className="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.squarespace-cdn.com/content/v1/637cdff91a8b3b36edfd65a7/1699545964754-5VNXUQYTCU7ZNNN8L52S/Cre%CC%81ation+sans+titre+%2822%29.png)",
      }}
      onSubmit={handleSubmit}
    >
      <p className="font-extrabold font-mono text-2xl">
        {hasProfile
          ? `Welcome back, ${user?.displayName ?? "User!"}`
          : `Welcome, ${user?.displayName ?? "User!"}`}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 bg-black/10 p-8 rounded-2xl shadow-xl backdrop-blur-md font-mono font-thin">
        <div className="bg-white/10 p-2 rounded-lg">
          <p>Keep up with your goals by updating your info regularly.</p>
          <p className="m-2">
            {hasProfile ? "Update anything below, or scroll down. Once saved, refresh, and you are free to continue!" : "Fill this out once to get started."}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-center">

              <p>{hasProfile ? "Update Gender?" : "Are you Male or Female?"}</p>
              <select
                className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition"
                value={info.gender}
                onChange={handle("gender")}
              >
                <option disabled value="">
                  Select Gender
                </option>
                <option className="text-black" value="Male">
                  Male
                </option>
                <option className="text-black" value="Female">
                  Female
                </option>
              </select>

          <p>{hasProfile ? "Update Weight (lbs)?" : "How much do you weigh (lbs)?"}</p>
          <input
            className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition"
            value={info.weight}
            onChange={handle("weight")}
          />

          <p>{hasProfile ? "Update Height (in)?" : "How tall are you (in)?"}</p>
          <input
            className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition"
            value={info.height}
            onChange={handle("height")}
          />

          <p>{hasProfile ? "Update Age?" : "How old are you?"}</p>
          <input
            className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition"
            value={info.age}
            onChange={handle("age")}
          />

          <button className="bg-white/5 m-5 w-20 rounded-lg hover:bg-white/20 transition" type="submit">
            {hasProfile ? "Update!" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}
