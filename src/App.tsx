import Router from "./components/Router";
import DevelopmentPlan from "./views/DevelopmentPlan";
import LearnMore from "./views/LearnMore";
import Quiz from "./views/Quiz";
import { ServiceProvider } from "./views/QuizContextProvider";
import Results from "./views/Results";

export default function App() {

  const routes = [
    {
      path: '/',
      component: LearnMore
    },
    {
      path: '/quiz',
      component: Quiz
    },
    {
      path: '/develop',
      component: DevelopmentPlan
    },
    {
      path: '/quiz/results',
      component: Results
    }
  ]

  return (
    <ServiceProvider>
      <Router routes={routes} />
    </ServiceProvider>
  );
}