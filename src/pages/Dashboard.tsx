import UrlInput from "../components/UrlInput";
import RecipeCard from "../components/RecipeCard";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function getFormattedDate() {
  const now = new Date();
  const day = now
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();
  const month = now
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
  const date = now.getDate();
  return `${day}, ${month} ${date}`;
}

const macros = [
  { label: "Calories", value: "200", unit: "" },
  { label: "Protein", value: "20", unit: "G" },
  { label: "Carbs", value: "20", unit: "G" },
  { label: "Fat", value: "20", unit: "G" },
];

const meals = [
  {
    slot: "Breakfast",
    name: "Greek Yogurt Protein Parfait",
    cal: 520,
    protein: 45,
    logged: true,
  },
  {
    slot: "Lunch",
    name: "Greek Yogurt Protein Parfait",
    cal: 520,
    protein: 45,
    logged: true,
  },
  {
    slot: "Dinner",
    name: "Greek Yogurt Protein Parfait",
    cal: 520,
    protein: 45,
    logged: false,
  },
];

export default function Dashboard() {
  const mealsLogged = 0;
  const mealsGoal = 5;

  return (
    <div className="min-h-screen bg-cream-light">
      <div className="px-12 pt-12 pb-12 mx-auto max-w-7xl">
        {/* Greeting header */}
        <div className="mb-8">
          <p className="body-text text-green uppercase mb-1">
            {getFormattedDate()}
          </p>
          <h1 className="heading-lg text-green-dark leading-none mb-2">
            {getGreeting().toUpperCase()}
          </h1>
          <p className="body-text text-green">
            You have logged {mealsLogged} of {mealsGoal} meals today
          </p>
        </div>
        {/* URL input */}
        <UrlInput />
        {/* Macros + Plan */}
        <div className="flex flex-wrap gap-8 mt-10">
          {/* Today's Macros */}
          <div className="flex flex-col flex-1 min-w-[320px]">
            <h2 className="heading-sm text-green-dark mb-4">Today's Macros</h2>
            <div className="flex-1 bg-white rounded-2xl border border-cream p-8 flex items-center">
              <div className="grid grid-cols-4 gap-4 w-full">
                {macros.map(({ label, value, unit }) => (
                  <div key={label} className="flex flex-col gap-1 items-center">
                    <span className="heading-md text-green-dark-leading-none">
                      {value}
                      {unit}
                    </span>
                    <span className="font-body text-green">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TODAY'S PLAN */}
          <div className="flex flex-col flex-1 min-w-[320px]">
            <h2 className="heading-sm text-green-dark mb-4">TODAY'S PLAN</h2>
            <div className="flex-1 bg-white rounded-2xl border border-cream p-4 flex items-stretch">
              <div className="grid grid-cols-3 gap-3 w-full">
                {meals.map(({ slot, name, cal, protein, logged }) => (
                  <div
                    key={slot}
                    className={`rounded-xl p-4 border ${logged ? "bg-green/10 border-green/20" : "bg-white border-cream"}`}
                  >
                    <p className="font-body text-xs text-green-dark uppercase tracking-wider mb-1">
                      {slot}
                    </p>
                    <p className="font-body font-semibold text-green-dark text-sm leading-snug mb-2">
                      {name}
                    </p>
                    <p className="font-body text-xs text-green-dark/60">
                      {cal} cal&nbsp;&nbsp;{protein}g protein
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Imports */}
          <div className="w-full">
            <h2 className="heading-sm text-green-dark mb-4">Recent Imports</h2>
            <div className="grid grid-cols-3 gap-4">
              <RecipeCard
                title="High Protein Chicken Burrito Bowl"
                tags={["high-protein", "bulking"]}
                time={5}
                cal={550}
                source="TikTok"
                protein={20}
                carbs={5}
                fat={2}
              />
              <RecipeCard
                title="High Protein Chicken Burrito Bowl"
                tags={["high-protein", "bulking"]}
                time={5}
                cal={550}
                source="TikTok"
                protein={20}
                carbs={5}
                fat={2}
              />
              <RecipeCard
                title="High Protein Chicken Burrito Bowl"
                tags={["high-protein", "bulking"]}
                time={5}
                cal={550}
                source="TikTok"
                protein={20}
                carbs={5}
                fat={2}
              />
              <RecipeCard
                title="High Protein Chicken Burrito Bowl"
                tags={["high-protein", "bulking"]}
                time={5}
                cal={550}
                source="TikTok"
                protein={20}
                carbs={5}
                fat={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
