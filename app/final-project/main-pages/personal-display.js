"use client";

import { useState } from "react";

export default function PersonalDisplay( { personInfo, totalConsumedCals=0, totalConsumedProtein=0, totalBurnedCals=0 } ) {
  const [projCals, setProjCals] = useState("");
  const [projBurnedCals, setProjBurnedCals] = useState("");

  const weightLb = Number(personInfo?.weight ?? 0);
  const weightKg = Number(personInfo?.weight ?? 0) / 2.205;
  const heightCm = Number(personInfo?.height ?? 0) * 2.54;
  const age = Number(personInfo?.age ?? 0);
  const gender = String(personInfo?.gender ?? "").toLowerCase();

  const bmr = Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + (gender === "male" ? 5 : -161));
  const proteinRange1 = Math.round(weightLb * 0.7)
  const proteinRange2 = Math.round(weightLb)

  const activitySedentary = Math.round(bmr * 1.2);

  const projCalsNum = Number(projCals || 0);
  const projBurnedNum = Number(projBurnedCals || 0);

  const weeklyLossLb = ((activitySedentary + projBurnedNum) - projCalsNum) * 7 / 3500;
  const dailyLossLb = (((activitySedentary + totalBurnedCals) - totalConsumedCals) / 3500).toFixed(2);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.squarespace-cdn.com/content/v1/637cdff91a8b3b36edfd65a7/1699545964754-5VNXUQYTCU7ZNNN8L52S/Cre%CC%81ation+sans+titre+%2822%29.png)",
      }}
    >
      <h1 className="font-extrabold font-mono text-4xl">Your Day&apos;s Summary</h1>

      <div className="flex flex-col items-center justify-center gap-4 bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md font-mono font-thin">
        <h1 className="border-b-1">Key Information</h1>
        <p>Calories needed to maintain weight: {activitySedentary}</p>
        <p>Protein Consumed (Optimal: {proteinRange1} - {proteinRange2}): {totalConsumedProtein}</p>
        <p>Your Total Calories Consumed: {totalConsumedCals}</p>
        <p>Your Total Calories Burned: {totalBurnedCals}</p>
        <div className="bg-white/10 p-4 rounded-lg">
        <p>Calorie Deficit: {Number(activitySedentary) + Number(totalBurnedCals) - Number(totalConsumedCals)}</p>
        <p>Weight Lost Today: {dailyLossLb}</p>
        </div>
        <div className="bg-black/10 p-4 rounded-lg">
          <p className="border-b-1">Weight Loss Calculator (Tailored to You)</p>

          <input
            value={projCals}
            onChange={(e) => setProjCals(e.target.value)}
            className="m-4 bg-white/10 w-80 text-center rounded-lg p-2 hover:bg-white/20 transition"
            placeholder="Daily Calorie Target"
            inputMode="numeric"
          />

          <input
            value={projBurnedCals}
            onChange={(e) => setProjBurnedCals(e.target.value)}
            className="m-4 bg-white/10 w-80 text-center rounded-lg p-2 hover:bg-white/20 transition"
            placeholder="Daily Calories Burned"
            inputMode="numeric"
          />
          <p>Projected weight loss: {weeklyLossLb} lbs per week. Deficit: {Number(activitySedentary) + Number(projBurnedNum) - Number(projCalsNum)}</p>
        </div>
      </div>
    </main>
  );
}

