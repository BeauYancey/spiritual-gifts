import Router from "./components/Router";
import DevelopmentPlan from "./views/DevelopmentPlan";
import LearnMore from "./views/LearnMore";
import Quiz from "./views/Quiz";

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
    }
  ]

  return <Router routes={routes} />;
}