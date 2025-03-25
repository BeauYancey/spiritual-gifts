import { useNavigate } from "@tanstack/react-router";
import QuizQuestion from "../components/QuizQuestion";
import { questions } from "../data/questions";
import { useState } from "react";
import { useService } from "../components/QuizContextProvider";

export default function Quiz() {
	const service = useService();
	const [error, setError] = useState<string>('');
	const navigate = useNavigate();

	const submit = () => {
		try {
			service.computePoints();
			navigate({to: '/quiz/results'});
		}
		catch (error) {
			setError((error as Error).message);
		}
	}

	return (
		<main className='quiz-page'>
			<h1>Take the Quiz</h1>
			<p className="instructions">Please answer each question as accurately as possible.</p>
			<hr />
			{questions.map((q, i) => <QuizQuestion key={i} id={i} service={service} {...q} />)}
			{error && <h3 style={{color: '#E05153', marginBottom: 0}}>{error}</h3>}
			<button style={{backgroundColor: error && '#E05153'}} onClick={submit}>Submit</button>
		</main>
	);
}