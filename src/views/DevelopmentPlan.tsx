import { useService } from "../components/QuizContextProvider"

export default function DevelopmentPlan() {
	const service = useService()


	return (
		<main>
			<h1>Create a Development Plan</h1>
			<hr />
			{!(service.getGifts().top.length === 0) && 
				<p style={{textAlign: 'center', color: 'var(--purple-dark)', fontWeight: 500}}>
					It looks like you haven't taken the quiz yet. That's okay, but we can't give 
					personalized suggestions until you do.
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
		</main>
	)
}