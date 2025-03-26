import { GiftInfo } from "../data/model/Gift";

interface Props {
	gift: GiftInfo
	onClick: () => void
}

export default function GiftCard(props: Props) {
	return (
		<div className="gift-card" style={{backgroundColor: props.gift.color}} onClick={props.onClick}>
			<img src={props.gift.icon || 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png'}/>
			<div className='card-title'>
				<p>{props.gift.shortName}</p>
			</div>
		</div>
	)
}
