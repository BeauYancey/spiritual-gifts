import { Question } from "./model/Question";
import { Gift } from "./model/Gift";

export const questions: Question[] = [
	{
		text: "I feel confident that God will provide, even in extremely difficult circumstances.",
		gifts: [{ gift: Gift.faith, weight: 1 }, { gift: Gift.guidance, weight: 1 }]
	},
	{
		text: "I feel prompted to pray for people who are physically or emotionally unwell.",
		gifts: [{ gift: Gift.healing, weight: 2 }, { gift: Gift.miracles, weight: 1 }, { gift: Gift.prayer, weight: 2 }]
	},
	{
		text: "I can sense whether something is influenced by the Spirit of God or by another source.",
		gifts: [{ gift: Gift.spirits, weight: 2 }]
	},
	{
		text: "I am deeply moved by the testimonies of others and feel a strong witness that their words are true.",
		gifts: [{ gift: Gift.belief, weight: 2 }]
	},
	{
		text: "I have an unshakable conviction that Jesus Christ is the Son of God and Savior of the world.",
		gifts: [{ gift: Gift.belief, weight: 2 }]
	},
	{
		text: "I often know what to say to help others make better choices.",
		gifts: [{ gift: Gift.wisdom, weight: 1 }, { gift: Gift.prophecy, weight: 1 }]
	},
	{
		text: "I enjoy studying the scriptures in depth and feel illuminated by new insights.",
		gifts: [{ gift: Gift.prophecy, weight: 1 }, { gift: Gift.knowledge, weight: 1 }]
	},
	{
		text: "I trust God's promises, even when I can't see how they'll come true.",
		gifts: [{ gift: Gift.faith, weight: 2 }]
	},
	{
		text: "I feel that my prayers for others' healing are powerful and effective.",
		gifts: [{ gift: Gift.healing, weight: 2 }, { gift: Gift.prayer, weight: 1 }]
	},
	{
		text: "I've experienced or witnessed events that I believe were miracles.",
		gifts: [{ gift: Gift.miracles, weight: 2 }]
	},
	{
		text: "I feel prompted to call others to repentance when they are acting contrary to God's commandments.",
		gifts: [{ gift: Gift.prophecy, weight: 2 }, { gift: Gift.testimony, weight: 1 }]
	},
	{
		text: "I can sense when someone's intentions are pure or not.",
		gifts: [{ gift: Gift.spirits, weight: 2 }]
	},
	{
		text: "I feel comforted by the thought of heavenly messengers being close.",
		gifts: [{ gift: Gift.angels, weight: 2 }]
	},
	{
		text: "I feel spiritually energized when hearing others testify of Jesus Christ.",
		gifts: [{ gift: Gift.belief, weight: 2 }]
	},
	{
		text: "I feel a burning certainty that Christ's atonement is real and personal.",
		gifts: [{ gift: Gift.faith, weight: 1 }]
	},
	{
		text: "I often give people advice that they later say was exactly what they needed to hear.",
		gifts: [{ gift: Gift.wisdom, weight: 1 }]
	},
	{
		text: "I can connect different scripture passages and see overarching truths.",
		gifts: [{ gift: Gift.wisdom, weight: 2 }, { gift: Gift.knowledge, weight: 1 }]
	},
	{
		text: "I remain hopeful and trusting in God, even during personal trials.",
		gifts: [{ gift: Gift.faith, weight: 2 }]
	},
	{
		text: "I feel physically or emotionally affected when others are suffering.",
		gifts: [{ gift: Gift.healing, weight: 2 }]
	},
	{
		text: "I've felt prompted to ask for or offer priesthood blessings.",
		gifts: [{ gift: Gift.healing, weight: 2 }]
	},
	{
		text: "I am deeply moved by the sacrifice and love of Jesus Christ.",
		gifts: [{ gift: Gift.belief, weight: 1 }, { gift: Gift.faith, weight: 1 }]
	},
	{
		text: "I often know how to help people navigate difficult moral dilemmas.",
		gifts: [{ gift: Gift.wisdom, weight: 2 }]
	},
	{
		text: "I love learning doctrine and sharing it with others.",
		gifts: [{ gift: Gift.knowledge, weight: 2 }]
	},
	{
		text: "I've felt words come to my mind that I knew I needed to speak to someone else.",
		gifts: [{ gift: Gift.prophecy, weight: 2 }]
	},
	{
		text: "I feel uncomfortable in places or situations where the Spirit is absent.",
		gifts: [{ gift: Gift.spirits, weight: 2 }]
	},
	{
		text: "I recognize when someone enters my life at just the right moment to offer help or comfort.",
		gifts: [{ gift: Gift.angels, weight: 2 }]
	},
	{
		text: "I can sense when someone has been placed in my life to teach me something meaningful.",
		gifts: [{ gift: Gift.angels, weight: 2 }]
	},
	{
		text: "I quickly pick up on new languages or dialects.",
		gifts: [{ gift: Gift.tongues, weight: 1 }]
	},
	{
		text: "I feel comfortable and effective communicating with people from very different backgrounds.",
		gifts: [{ gift: Gift.tongues, weight: 2 }, { gift: Gift.judgement, weight: 1 }]
	},
	{
		text: "I can sense the emotions or intentions behind someone's words, even if we struggle to understand each other.",
		gifts: [{ gift: Gift.tongues, weight: 2 }]
	},
	{
		text: "I feel a deep curiosity and excitement about learning new ways to connect with others through language or culture.",
		gifts: [{ gift: Gift.tongues, weight: 2 }]
	},
	{
		text: "I often feel prompted to pray for certain things.",
		gifts: [{ gift: Gift.prayer, weight: 2 }]
	},
	{
		text: "I trust that God's power can transform lives, including my own.",
		gifts: [{ gift: Gift.faith, weight: 1 }, { gift: Gift.miracles, weight: 2 }]
	},
	{
		text: "I feel a strong sense of urgency to remind others of God's love.",
		gifts: [{ gift: Gift.prophecy, weight: 2 }, { gift: Gift.testimony, weight: 2 }]
	},
	{
		text: "I feel the Spirit confirming truth to me as I study the word of God.",
		gifts: [{ gift: Gift.knowledge, weight: 2 }]
	},
	{
		text: "I feel a strong desire to help others strengthen their faith through my experiences.",
		gifts: [{ gift: Gift.testimony, weight: 2 }]
	},
	{
		text: "I believe my testimony can touch hearts and inspire change.",
		gifts: [{ gift: Gift.testimony, weight: 2 }, { gift: Gift.miracles, weight: 2 }]
	},
	{
		text: "I feel peace and closeness to God when I pray.",
		gifts: [{ gift: Gift.prayer, weight: 2 }]
	},
	{
		text: "I naturally turn to God for direction in decisions big and small.",
		gifts: [{ gift: Gift.guidance, weight: 2 }]
	},
	{
		text: "I actively seek divine wisdom through prayer, scripture, and pondering.",
		gifts: [{ gift: Gift.guidance, weight: 2 }, { gift: Gift.knowledge, weight: 1 }]
	},
	{
		text: "I strive to see people as God sees them, beyond their mistakes or struggles.",
		gifts: [{ gift: Gift.judgement, weight: 2 }]
	},
	{
		text: "I feel peace when I choose forgiveness over criticism.",
		gifts: [{ gift: Gift.judgement, weight: 1 }]
	},
	{
		text: "I feel compassion for others, even when they've wronged me.",
		gifts: [{ gift: Gift.judgement, weight: 2 }, {gift: Gift.contention, weight: 2}]
	},
	{
		text: "I feel prompted to be a peacemaker in difficult situations.",
		gifts: [{ gift: Gift.contention, weight: 2 }]
	},
	{
		text: "I feel the Spirit withdraw when conversations become contentious.",
		gifts: [{ gift: Gift.contention, weight: 2 }, { gift: Gift.spirits, weight: 1 }]
	},
	{
		text: "I seek to understand others' perspectives, even when we disagree.",
		gifts: [{ gift: Gift.judgement, weight: 2 }, { gift: Gift.contention, weight: 2}]
	},
	{
		text: "I believe that God can work through me to bring about extraordinary outcomes",
		gifts: [{ gift: Gift.miracles, weight: 1 }]
	},
	{
		text: "I regularly seek confirmation from God before making important decisions.",
		gifts: [{ gift: Gift.guidance, weight: 2 }]
	},
	{
		text: "I often feel my prayers are answered in unexpected, yet meaningful, ways.",
		gifts: [{ gift: Gift.prayer, weight: 1 }]
	},
	{
		text: "I sometimes sense when someone is struggling spiritually, even if they don't say anything.",
		gifts: [{ gift: Gift.spirits, weight: 1 }]
	},
	{
		text: "I feel a responsibility to seek divine insight for my calling.",
		gifts: [{ gift: Gift.wisdom, weight: 2 }, { gift: Gift.guidance, weight: 1 }]
	},
	{
		text: "I feel energized when I discover new truths in scripture or spiritual texts.",
		gifts: [{ gift: Gift.knowledge, weight: 1 }]
	},
	{
		text: "I feel inspired to share my testimony of Jesus Christ when others share their sincere testimony.",
		gifts: [{ gift: Gift.belief, weight: 1 }, { gift: Gift.testimony, weight: 1 }]
	},
	{
		text: "I feel drawn to make friends with people who are not like me",
		gifts: [{ gift: Gift.tongues, weight: 1 }]
	},
	{
		text: "I believe there are people in my life right now that God put there for a reason",
		gifts: [{ gift: Gift.angels, weight: 2 }]
	}
];