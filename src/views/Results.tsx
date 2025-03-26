import { useNavigate } from "@tanstack/react-router";
import GiftCard from "../components/GiftCard";
import { useService } from "../components/QuizContextProvider";
import { giftInfo } from "../data/gifts";
import { useRef, useState } from "react";
import { GiftInfo } from "../data/model/Gift";
import GiftModal from "../components/GiftModal";

export default function Results() {

	const service = useService();
	const [gifts] = useState(service.getGifts());
	const navigate = useNavigate();

	const dialogRef = useRef<HTMLDialogElement | null>(null)
	const [displayedGift, setDisplayedGift] = useState<GiftInfo | null>(null)

	const handleCardClick = (gift: GiftInfo) => {
		return () => {
			console.log('handling click on ' + gift.shortName)
			setDisplayedGift(gift);
			dialogRef.current?.showModal()
		}
	}
	
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
					{gifts.top.map(gift => <GiftCard onClick={handleCardClick(giftInfo[gift])} key={gift} gift={giftInfo[gift]}/>)}
				</div>
			</section>

			<section>
				<h2>Your Developing Gifts</h2>
				<div className='card-row'>
					{gifts.developing.map(gift => <GiftCard onClick={handleCardClick(giftInfo[gift])} key={gift} gift={giftInfo[gift]}/>)}
				</div>
			</section>
			
			<section>
				<h2>Gifts to Explore</h2>
				<div className='card-row'>
					{gifts.explore.map(gift => <GiftCard onClick={handleCardClick(giftInfo[gift])} key={gift} gift={giftInfo[gift]}/>)}
				</div>
			</section>

			<button onClick={retakeQuiz} style={{marginTop: '2rem'}}>Retake the Quiz</button>
			
			<dialog className='details-modal' ref={dialogRef}>
				<GiftModal onClose={() => dialogRef.current?.close()} gift={displayedGift} />
			</dialog>
		</main>
	);
}