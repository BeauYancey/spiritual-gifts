import { GiftInfo } from "../data/model/Gift";

interface Props {
	gift: GiftInfo | null;
	onClose: () => void;
}

export default function GiftModal(props: Props) {
	if (props.gift) {
		return (
			<>
				<button onClick={props.onClose}>&times;</button>
				<h1>{props.gift.name}</h1>
				<hr />
				<p>{props.gift.description}</p>
			</>
		);	
	} else {
		return null
	}

}