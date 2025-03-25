import { useService } from "../components/QuizContextProvider";
import { giftInfo } from "../data/gifts";

export default function Results() {

	const service = useService();
	const {top, developing, explore} = service.getGifts();

	return (
		<main>
			<h1>Results</h1>
			<hr />

			<section>
				<h2>Your Top Gifts</h2>
				<div>
					{top.map(gift => <p>{giftInfo[gift].shortName}</p>)}
				</div>
			</section>

			<section>
				<h2>Your Developing Gifts</h2>
				<div>
					{developing.map(gift => <p>{giftInfo[gift].shortName}</p>)}
				</div>
			</section>
			
			<section>
				<h2>Gifts to Explore</h2>
				<div>
					{explore.map(gift => <p>{giftInfo[gift].shortName}</p>)}
				</div>
			</section>
		</main>
	);
}