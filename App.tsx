import { StatusBar } from "expo-status-bar";
import QuizScreen from "./src/app/QuizScreen";
import QuizProvider from "./src/app/providers/QuizProvider";

export default function App() {
  return (
    <>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="auto" />
    </>
  );
}
