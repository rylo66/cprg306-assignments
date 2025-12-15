import data from "./calories.json";
import { useState } from "react";

export default function ActivityLogging( {personInfo, onAddBurned} ) {

    const weight = personInfo?.weight ?? "";

    const [category, setCategory] = useState("");
    const [activity, setActivity] = useState("");
    const [time, setTime] = useState("");

    const [activities, setActivities] = useState([]);

    const ClearInputs = () => {
      setCategory("");
      setActivity("");
      setTime("");
    };

      function getClosestWeightColumnKey(userWeightLb) {
        const availableWeightsLb = data.meta.weights_lb;
        let closestWeightLb = availableWeightsLb[0];

        for (const candidateWeightLb of availableWeightsLb) {
          const isCloser = Math.abs(userWeightLb - candidateWeightLb) < Math.abs(userWeightLb - closestWeightLb);
          if (isCloser) closestWeightLb = candidateWeightLb;
        }
        return closestWeightLb;
      }

    function caloriesBurned(entry) {
      const weightKey = getClosestWeightColumnKey(Number(weight));

      const item =
        data.categories
          .find((c) => c.name === entry.category)
          ?.items.find((a) => a.name === entry.activity);

      const value = item && item.calories ? item.calories[weightKey] : 0;
      const caloriesPer30Min = Number(value);
      return (caloriesPer30Min * Number(entry.time)) / 30;
    }

      function handleSubmit(e) {
        e.preventDefault();

        if (!category || !activity || !time) {
          alert("Please fill in all fields");
          return;
        }
          
        if (!weight) {
          alert("Enter your info in Personal Aid first!");
          return;
        }
          
        const entry = { category, activity, time };

        const burned = caloriesBurned(entry);          
        onAddBurned?.(burned);                         

        setActivities((prev) => [...prev, entry]);

        ClearInputs();                                 
      }

    return(
        <form
        onSubmit ={handleSubmit}
        className="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-cover bg-center"
        style={{backgroundImage: 'url(https://wallup.net/wp-content/uploads/2016/02/20/253300-nature-trees-forest-leaves-sunlight-path-shadow-women-women_outdoors-running-sports-silhouette-rear_view.jpg)'}}>
            <h1 className="font-extrabold font-mono text-4xl">Welcome to your personal Activity Logger!</h1>
            <div className="flex flex-row items-center justify-center gap-16">
            <div className="flex flex-col items-center justify-center text-center gap-8 bg-black/25 backdrop-blur-md p-8 rounded-2xl shadow-xl font-mono font-thin">
                <h1 className="font-mono font-bold">Select Activities You&apos;ve Done Today</h1>

                  <p>Choose Activity Category:</p>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-white/10 w-100 text-center rounded-lg p-2 hover:bg-white/20 transition" >
                    <option value="" disabled>Select Category</option>
                    {data.categories.map((c) => (
                      <option key={c.name} value={c.name} className="text-black">
                        {c.name}
                      </option>
                    ))}
                </select>

                  <p>Choose Specific Activity:</p>
                  <select value={activity} onChange={(e) => setActivity(e.target.value)} className="bg-white/10 w-100 text-center rounded-lg p-2 hover:bg-white/20 transition" >
                  <option value="" disabled>Select Activity</option>
                  {(data.categories.find((c) => c.name === category)?.items ?? []).map((a) => (
                    <option key={a.name} value={a.name} className="text-black">
                      {a.name}
                    </option>
                  ))}
                </select>

                  <p>How long did you do this activity?</p>
                  <input value={time} onChange={(e) => setTime(e.target.value)} className="bg-white/10 w-100 text-center rounded-lg p-2 hover:bg-white/20 transition" placeholder="Time Spent (minutes)"></input>
              <button className="bg-white/5 w-25 rounded-lg hover:bg-white/20 transition" type="submit">
                  Add Activity
              </button>
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-8 bg-black/25 backdrop-blur-md p-7 rounded-2xl shadow-xl font-mono font-thin">
                  <div className=" h-[55vh] overflow-y-auto  flex flex-col text-center gap-8 p-8 font-mono font-thin">
                <h1 className="font-mono font-bold">Activities Added</h1>
                {activities.map((activity, index) => (
                  <div key={index} className="flex flex-col items-center justify-center text-center gap-2 bg-white/10 p-4 rounded-lg shadow-md ">
                    <p className="font-bold">Activity: {activity.activity}, Time: {activity.time} minutes</p>
                    <p>Calories Burned: {Math.round(caloriesBurned(activity))} kcal</p>
                </div>
                ))}
                </div>
            </div>
            </div>
        </form>
    )
}