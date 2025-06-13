import "./App.css";
import { Card } from "./components/ui/card";
import CurrentTime from "./components/currentTime";

function App() {
  return (
    <>
      <Card className="max-w-md mx-auto my-10 p-8 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h1 className="text-2xl font-bold">Hello World!</h1>
        <CurrentTime/>
      </Card>
    </>
  );
}

export default App;
