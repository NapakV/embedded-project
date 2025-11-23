import { Mic } from "./components/Mic";
export default function Home() {
  let Temperature=25;
  let humidity=60;
  let smokeLevel='low';
  const getTemperature=()=>{
    // fetch temperature from api
    Temperature=30;
  }
  const getHumidity=()=>{
    // fetch humidity from api
    humidity=65;
  }
  const getSmokeLevel=()=>{
    // fetch smoke level from api
    smokeLevel='low';
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-bg ">
        <div className="flex flex-col gap-5 items-center justify-start py-10">
          <div className="text-yellow-300 text-4xl font-bold text-center font-[BluePrint] bg-danger-200">
            Smart <br/>Assistance <br/>Bot
          </div>
          <div className="flex flex-col items-center">
            <div className="font-[mont] font-bold text-xl text-left text-primary-200">
              Current Temperature : {Temperature} Celcius<br/>
              Current Humidity : {humidity} <br/>
              Smoke Level : {smokeLevel} 
            </div>
          </div>
          {/* mic */}
          <div>
            <Mic />
          </div>

        </div>
      </main>
    </div>
  );
}
