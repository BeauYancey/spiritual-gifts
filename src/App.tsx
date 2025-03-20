import Router from "./components/Router";
import LearnMore from "./views/LearnMore";

export default function App() {

  const routes = [
    {
      path: '/',
      component: LearnMore
    }
  ]

  return <Router routes={routes} />;
}