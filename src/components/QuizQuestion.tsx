interface Props {
	id: string;
	text: string;
}

export default function QuizQuestion(props: Props) {
	return (
		<div className="question-container">
			<h3>{props.text}</h3>
			<div className="answer-options">
				<label>Disagree</label>
				<input type="radio" name={props.id} value={0}/>
				<input type="radio" name={props.id} value={1}/>
				<input type="radio" name={props.id} value={2}/>
				<input type="radio" name={props.id} value={3}/>
				<input type="radio" name={props.id} value={4}/>
				<label>Agree</label>
			</div>
		</div>
	);
}