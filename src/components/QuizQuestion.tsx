import { useState } from "react";
import { GiftWeight } from "../data/model/Question";
import { QuizService } from "../service/QuizService";

interface Props {
	id: number;
	text: string;
	gifts: GiftWeight[];
	service: QuizService;
}

export default function QuizQuestion(props: Props) {

	const [value, setValue] = useState(props.service.getSelection(props.id))

	const setSelection = (selection: number) => {
		setValue(selection)
		props.service.updateSelection(props.id, selection)
	}

	return (
		<div className="question-container">
			<h3>{props.text}</h3>
			<div className="answer-options">
				<label>Disagree</label>
				<input type="radio" checked={value === 0} name={props.id.toString()} value={0} onChange={() => setSelection(0)}/>
				<input type="radio" checked={value === 1} name={props.id.toString()} value={1} onChange={() => setSelection(1)}/>
				<input type="radio" checked={value === 2} name={props.id.toString()} value={2} onChange={() => setSelection(2)}/>
				<input type="radio" checked={value === 3} name={props.id.toString()} value={3} onChange={() => setSelection(3)}/>
				<input type="radio" checked={value === 4} name={props.id.toString()} value={4} onChange={() => setSelection(4)}/>
				<label>Agree</label>
			</div>
		</div>
	);
}