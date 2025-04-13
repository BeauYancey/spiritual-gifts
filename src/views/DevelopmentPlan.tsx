import { useEffect, useState } from "react"
import { useService } from "../components/QuizContextProvider"
import { Gift } from "../data/model/Gift";
import { giftInfo } from "../data/gifts";
import { Link } from "@tanstack/react-router";


interface GiftResults {
	top: Gift[];
	developing: Gift[];
	explore: Gift[];
}

export default function DevelopmentPlan() {
	const service = useService()
	const [gifts, setGifts] = useState<GiftResults | null>(null)
	const [suggestions, setSuggestions] = useState<string[]>([])

	useEffect(() => {
		try {
			const quizResults = service.getGifts()
			if (quizResults.top.length > 0) {
				setGifts(quizResults)
			}
		}
		catch (error) {
			console.error((error as Error).message)
			setGifts(null)
		}
	}, [])

	useEffect(() => {
		generateSuggestions()
	}, [gifts])

	useEffect(() => {
		console.log(suggestions)
	}, [suggestions])

	function generateSuggestions() {
		setSuggestions([])
		function getRandomItem<T>(options: T[]): T {
			const ind = Math.floor(Math.random() * options.length)
			return options[ind]
		}

		if (!gifts) {
			console.log('no gifts, need to do this randomly')
			const giftOptions = Object.values(giftInfo)
			for (let i = 0; i < 7; i++) {
				const g = getRandomItem(giftOptions);
				const newSuggestion = getRandomItem(g.develop);
				setSuggestions(prev => !prev.includes(newSuggestion) ? [...prev, newSuggestion] : prev);
			}
		}
		else {
			const flatGifts = Object.values(gifts).flat() as Gift[];
			for (let i = 0; i < 7; i++) {
				const g = getRandomItem(flatGifts);
				const newSuggestion = getRandomItem(giftInfo[g].develop);
				setSuggestions(prev => !prev.includes(newSuggestion) ? [...prev, newSuggestion] : prev);
			}
		}
	}

	return (
		<main>
			<h1>Create a Development Plan</h1>
			<hr />
			{!gifts && 
				<p style={{textAlign: 'center', color: 'var(--purple-dark)', fontWeight: 500}}>
					It looks like you haven't taken <Link to='/quiz' style={{color: 'inherit'}}>the quiz</Link> yet. That's okay, 
					but we can't give you personalized suggestions until you do.
				</p>
			}

			<section>
				<h2>Why Develop Spiritual Gifts?</h2>
				<p>
					Spiritual gifts are sacred tools God gives us to bless the lives of others and build His kingdom. They're not 
					just talents or traits—they're divine empowerments, tailored by a loving Heavenly Father for each of His children. 
					As we recognize and nurture these gifts, we draw closer to Christ, deepen our understanding of His work, and 
					become more capable instruments in His hands.
				</p>
				<p>
					Sometimes, gifts come naturally. Other times, they begin as quiet impressions or subtle tendencies. But every 
					spiritual gift—whether strong, developing, or still waiting to be discovered—can grow through faith, practice, 
					and intentional effort. As Paul taught, “Covet earnestly the best gifts” (
					<a href='https://churchofjesuschrist.org/study/scriptures/nt/1-cor/12?id=31#31' target='_blank'>1 Corinthians 12:31</a>
					). God invites us to seek them, develop them, and use them with humility and love.
				</p>
				<p>This page is here to help you act on that invitation.</p>
			</section>
			<section>
				<h2>What can I do?</h2>
				<p>
					{gifts ? 'Based on your quiz results, w' : "W"}e've gathered a list of suggestions to help you develop your 
					gifts, draw closer to Jesus Christ, and bless others along the way.
				</p>
				<ul>
					{suggestions.map(s => <li style={{paddingBottom: '.1rem'}}>{s}</li>)}
				</ul>
				<button style={{marginTop: '1rem', fontSize: '1.25rem'}} onClick={generateSuggestions}>Refresh My Plan</button>
			</section>
		</main>
	)
}