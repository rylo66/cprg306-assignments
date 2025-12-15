"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { db } from "../_utils/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

import MainPage from "./main";
import NutritionTracking from "./nutrition";
import ActivityLogging from "./activity-logging";
import PersonalDisplay from "./personal-display";
import Welcome from "./welcome";

export default function Page() {
  const { user } = useUserAuth();

  const [personInfo, setPersonInfo] = useState(null);

  const [totalConsumedCals, setTotalConsumedCals] = useState(0);
  const [totalConsumedProtein, setTotalConsumedProtein] = useState(0);
  const [totalBurnedCals, setTotalBurnedCals] = useState(0);

  useEffect(() => {
    if (!user?.uid) return;

    (async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      setPersonInfo(snap.exists() ? snap.data() : null);
    })();
  }, [user?.uid]);

  const saveProfile = async (info) => {
    if (!user?.uid) return;

    const payload = {
      ...info,
      weight: Number(info.weight),
      height: Number(info.height),
      age: Number(info.age),
      updatedAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", user.uid), payload, { merge: true });
    setPersonInfo((prev) => ({ ...(prev ?? {}), ...payload }));
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-screen snap-start">
        <Welcome />
        </section>

      <section className="h-screen snap-start">
        <MainPage personInfo={personInfo} onSubmit={saveProfile} />
      </section>

      <section className="h-screen snap-start">
        <NutritionTracking
          onAddConsumed={({ cals, protein }) => {
            setTotalConsumedCals((p) => p + cals);
            setTotalConsumedProtein((p) => p + protein);
          }}
        />
      </section>

      <section className="h-screen snap-start">
        <ActivityLogging
          personInfo={personInfo}
          onAddBurned={(calsBurned) => setTotalBurnedCals((p) => p + calsBurned)}
        />
      </section>

      <section className="h-screen snap-start">
        <PersonalDisplay
          personInfo={personInfo}
          totalConsumedCals={totalConsumedCals}
          totalConsumedProtein={totalConsumedProtein}
          totalBurnedCals={totalBurnedCals}
        />
      </section>
    </main>
  );
}
