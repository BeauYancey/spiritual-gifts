import QuizQuestion from "../components/QuizQuestion";
import { questions } from "../data/questions";

export default function Quiz() {
	return (
		<main className='quiz-page'>
			<h1>Take the Quiz</h1>
			<p className="instructions">Please answer each question as accurately as possible.</p>
			<hr />
			{questions.map((q, i) => <QuizQuestion key={i} id={'q' + i.toString()} {...q} />)}
			<button>Submit</button>
		</main>
	);
}