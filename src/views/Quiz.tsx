import QuizQuestion from "../components/QuizQuestion";

export default function Quiz() {

	const questions = [
		{
			text: "I feel confident that God will provide, even in extremely difficult circumstances."
		},
		{
			text: "I feel prompted to pray for people who are physically or emotionally unwell."
		},
		{
			text: "I am deeply moved by the testimonies of others and feel a strong witness that their words are true."
		},
		{
			text: "I have an unshakable conviction that Jesus Christ is the Son of God and Savior of the world."
		},
		{
			text: "I enjoy studying the scriptures in depth and feel illuminated by new insights."
		},
		{
			text: "I trust God's promises, even when I can't see how they'll come true."
		},
		{
			text: "I've experienced or witnessed events that I believe were miracles."
		},
		{
			text: "I feel prompted to call others to repentance when they are acting contrary to God's commandments."
		},
		{
			text: "I feel comforted by the thought of heavenly messengers being close."
		}
	]

	return (
		<main className='quiz-page'>
			<h1>Take the Quiz</h1>
			<p className="instructions">Please answer each question as accurately as possible.</p>
			<hr />
			{questions.map((q, i) => <QuizQuestion key={i} id={'q' + i.toString()} {...q} />)}
		</main>
	);
}