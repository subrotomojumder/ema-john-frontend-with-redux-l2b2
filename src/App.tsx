import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { darkMode } = useAppSelector((state) => state.theme);
  return (
    <div className={`min-h-screen w-full ${darkMode ? "bg-black text-white" : ""}`}>
      <MainLayout />
    </div>
  );
}

export default App;
