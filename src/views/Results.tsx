import { useNavigate } from "@tanstack/react-router";
import GiftCard from "../components/GiftCard";
import { useService } from "../components/QuizContextProvider";
import { giftInfo } from "../data/gifts";
import { useEffect, useState } from "react";

export default function Results() {

	const service = useService();
	const [gifts] = useState(service.getGifts());
	const navigate = useNavigate();

	useEffect(() => {
		console.log(gifts)
	}, [gifts]) 
	
	const retakeQuiz = () => {
		service.reset()
		navigate({to: '/quiz'})
	}

	return (
		<main>
			<h1>Results</h1>
			<hr />

			<section>
				<h2>Your Top Gifts</h2>
				<div className='card-row'>
					{gifts.top.map(gift => <GiftCard key={gift} gift={giftInfo[gift]}/>)}
				</div>
			</section>

			<section>
				<h2>Your Developing Gifts</h2>
				<div className='card-row'>
					{gifts.developing.map(gift => <GiftCard key={gift} gift={giftInfo[gift]}/>)}
				</div>
			</section>
			
			<section>
				<h2>Gifts to Explore</h2>
				<div className='card-row'>
					{gifts.explore.map(gift => <GiftCard key={gift} gift={giftInfo[gift]}/>)}
				</div>
			</section>

			<button onClick={retakeQuiz} style={{marginTop: '2rem'}}>Retake the Quiz</button>
		</main>
	);
}