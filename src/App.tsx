import Router from "./components/Router";
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
    }
  ]

  return <Router routes={routes} />;
}