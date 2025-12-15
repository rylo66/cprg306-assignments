import { useState } from "react";

export default function NutritionTracking( {onAddConsumed} ) {
  const [name, setName] = useState("");
  const [serving, setServing] = useState("");
  const [calsPerServing, setCalsPerServing] = useState("");
  const [proteinPerServing, setProteinPerServing] = useState("");
  const [gramsEaten, setGramsEaten] = useState("");
  const [foods, setFoods] = useState([]);

  const [totalCals, setTotalCals] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);

  const ClearInputs = () => {
    setName("");
    setServing("");
    setCalsPerServing("");
    setProteinPerServing("");
    setGramsEaten("");
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !serving || !calsPerServing || !proteinPerServing || !gramsEaten) {
      alert("Please fill in all fields");
      return;
    }

    const servingNum = Number(serving);
    const gramsNum = Number(gramsEaten);
    const calsNum = Number(calsPerServing);
    const proteinNum = Number(proteinPerServing);

    const addCals = servingNum ? (calsNum * gramsNum) / servingNum : 0;
    const addProtein = servingNum ? (proteinNum * gramsNum) / servingNum : 0;

    setTotalCals((prev) => prev + addCals);
    setTotalProtein((prev) => prev + addProtein);

    onAddConsumed?.({ cals: addCals, protein: addProtein });

    setFoods((prev) => [...prev, { name, serving, calsPerServing, proteinPerServing, gramsEaten }]);
    ClearInputs();
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-cover bg-center"
      style={{ backgroundImage: "url(https://images.alphacoders.com/866/thumb-1920-86641.jpg)" }}
    >
      <h1 className="text-4xl font-mono font-extrabold mb-2 text-white bg-black/10 px-2 py-1 rounded-2xl backdrop-blur">
        Welcome to your personal Nutrition Logger!
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center text-center gap-2 bg-black/25 backdrop-blur-md p-8 rounded-2xl font-mono font-thin">
          <h1 className="font-mono font-bold">Manual Entry</h1>

          <p>What did you eat today?</p>
          <input value={name ?? ""} onChange={(e) => setName(e.target.value)} className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition" placeholder="Search for food..." />

          <p>Serving Size</p>
          <input value={serving} onChange={(e) => setServing(e.target.value)} className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition" placeholder="(grams)..." />

          <p>Calories per serving size</p>
          <input value={calsPerServing} onChange={(e) => setCalsPerServing(e.target.value)} className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition" placeholder="Calories..." />

          <p>Protein per serving size</p>
          <input value={proteinPerServing} onChange={(e) => setProteinPerServing(e.target.value)} className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition" placeholder="Protein..." />

          <p>Total serving size eaten</p>
          <input value={gramsEaten} onChange={(e) => setGramsEaten(e.target.value)} className="bg-white/10 w-50 text-center rounded-lg p-2 hover:bg-white/20 transition" placeholder="(Grams)..." />

          <button className="bg-white/5 m-5 w-15 rounded-lg hover:bg-white/20 transition" type="submit">
            Submit
          </button>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-8 bg-black/25 backdrop-blur-md p-8 rounded-2xl shadow-xl font-mono font-thin ">
          <h1 className="font-mono font-bold">List of Foods Eaten</h1>
        <div className=" h-[30vh] overflow-y-auto  flex flex-col text-center gap-8 p-8 font-mono font-thin">
          {foods.map((food, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gap-2 bg-white/10 p-4 rounded-lg shadow-md ">
              <p className="font-bold capitalize">Food Name: {food.name}, Cals: {food.calsPerServing * food.gramsEaten / food.serving}, Protein: {food.proteinPerServing * food.gramsEaten / food.serving}</p>
            
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-8 bg-black/25 backdrop-blur-md p-8 rounded-2xl shadow-xl font-mono font-thin">
        <p>Total Calories: {totalCals}</p>
        <p>Total Protein: {totalProtein}</p>
        </div>
        </div>
      </form>
    </main>
  );
}
