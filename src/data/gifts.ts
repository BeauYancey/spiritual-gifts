import { Gift, GiftInfo } from "./model/Gift";

export const giftInfo: { [key in Gift]: GiftInfo } = {
	[Gift.wisdom]: {
		shortName: 'wisdom',
		name: 'The Gift of Wisdom',
		icon: '',
		color: '#BBD0B7',
		develop: ['Ask God for wisdom in prayer regularly.', 'Mentor someone who could benefit from your experience and perspective.'],
		description: 'The gift of wisdom is the ability to see life with divine perspective. It goes beyond knowledge, offering inspired discernment and practical insight. Those with this gift often give inspired counsel, help others make sound decisions, and perceive God\'s will in complex situations. Wisdom allows you to recognize eternal truths and apply them in everyday life, bringing clarity and peace to those around you. (James 1:5, D&C 46:17)'
	},
	[Gift.knowledge]: {
		shortName: 'knowledge',
		name: 'The Gift of Knowledge',
		icon: '',
		color: '#E5ECF8',
		develop: ['Memorize key scriptures and doctrinal passages.', 'Set aside time daily to study the scriptures in depth.', 'Join a gospel study group and share your insights.'],
		description: 'The gift of knowledge is the ability to understand and retain spiritual and practical truths. It often manifests as a deep hunger for learning and an inspired ability to recall and apply scripture, doctrine, or useful information. Those with this gift may quickly grasp gospel principles or comprehend complex topics, helping others grow in understanding. This gift strengthens faith through greater light and knowledge. (1 Corinthians 12:8, D&C 46:18)'
	},
	[Gift.faith]: {
		shortName: 'faith',
		name: 'The Gift of Faith',
		icon: '',
		color: '#F7DFC2',
		develop: ['Keep a journal of times when your prayers have been answered.', 'Set goals that require trust in God and record thw ways you see His hand in the outcome.'],
		description: 'The gift of faith is the ability to trust God deeply and unshakably, even in uncertainty or adversity. It enables you to confidently rely on the Savior\'s power, trusting in His promises and timing. Those with this gift often inspire hope in others, face trials with unwavering belief, and encourage steadfast devotion. Faith fuels miracles, endurance, and spiritual strength. (Hebrews 11:1, D&C 46:13-14)'
	},
	[Gift.healing]: {
		shortName: 'healing',
		name: 'The Gift of Healing, or the Faith to Heal or Be Healed',
		icon: '',
		color: '#BEDDF1',
		develop: ['Pray for those who are sick and offer comfort where appropriate.', 'Study the Savior’s healings and ask how you can emulate His compassion.', 'Reach out to someone who is struggling emotionally and offer encouragement.'],
		description: 'The gift of healing manifests as the power to restore physical, emotional, or spiritual wellness through divine influence. Some are given the faith to heal others, while some receive the faith to be healed. This gift brings comfort and renewal, often through prayer, blessing, or compassionate care. Those with this gift act as instruments in God\'s hands to bring relief and peace. (Mark 16:18, D&C 46:19-20)'
	},
	[Gift.miracles]: {
		shortName: 'miracles',
		name: 'The Gift of Working of Miracles',
		icon: '',
		color: '#D3C7A2',
		develop: ['Pray for opportunities to be part of miracles—both large and small.', 'Act boldly on spiritual impressions even when the outcome is uncertain.'],
		description: 'The gift of working miracles is the ability to perform or witness extraordinary events by God\'s power. It may involve healing, divine protection, or the fulfillment of seemingly impossible promises. Those with this gift act in bold faith, trusting in God\'s omnipotence. This gift strengthens testimonies by displaying God\'s glory in undeniable ways. (1 Corinthians 12:10, D&C 46:21)'
	},
	[Gift.prophecy]: {
		shortName: 'prophecy',
		name: 'The Gift of Prophecy',
		icon: '',
		color: '#FAE692',
		develop: ['Study the words of modern-day prophets and look for patterns in how they speak truth with love.', 'Seek appropraite revelation for those in your stewardship. Share it as you feel inspired to do so.'],
		description: 'The gift of prophecy is the ability to receive and share divinely inspired messages. It includes testifying of Christ, warning of danger, or offering comfort and guidance. Those with this gift often receive impressions of future events or insights into God\'s will. Prophecy edifies, strengthens, and brings light to others, always pointing toward Christ. (1 Corinthians 14:3, D&C 46:22)'
	},
	[Gift.spirits]: {
		shortName: 'discerning of spirits',
		name: 'The Gift of Discerning of Spirits',
		icon: '',
		color: '#FFB488',
		develop: ['Spend time in quiet prayer or reflection to increase spiritual sensitivity.', 'Help others recognize promptings from the Spirit in their own lives.'],
		description: 'The gift of discerning of spirits is the ability to perceive the spiritual influence behind people, situations, or teachings. It includes recognizing whether something is of God, of man, or of another source. Those with this gift can sense sincerity, detect deception, or feel divine promptings. It protects against spiritual confusion and strengthens discernment of truth. (1 Corinthians 12:10, Moroni 10:8, D&C 46:23)'
	},
	[Gift.tongues]: {
		shortName: 'tongues',
		name: 'The Gift of Speaking in Tongues or Interpretation of Tongues',
		icon: '',
		color: '#EBCCFF',
		develop: ['Learn a new language or practice using a language you know in a spiritual context.', 'Share gospel truths clearly and simply.', 'Seek to resolve misunderstandings and miscommunications whenever possible.'],
		description: 'The gift of tongues is the ability to communicate or interpret languages by divine influence. It may manifest as learning new languages quickly, communicating clearly with diverse people, or speaking with spiritual power. Interpretation of tongues is the capacity to translate or understand inspired speech. These gifts foster unity and expand the reach of the gospel. (1 Corinthians 12:10, Moroni 10:15-16, D&C 46:24-25)'
	},
	[Gift.angels]: {
		shortName: 'beholding of angels',
		name: 'The Gift of Beholding of Angles and Ministering Spirits',
		icon: '',
		color: '#80C3C3',
		develop: ['Reflect on people in your life who have ministered to you.', 'Write a thank-you letter to someone who has been an angel in your life.', 'Ask God to show you who needs you to be their ministering angel.'],
		description: 'The gift of beholding angels and ministering spirits is the ability to recognize individuals God has placed in your life for a divine purpose. It includes seeing the unseen influence of heavenly beings or identifying earthly angels who offer Christlike service. Those with this gift perceive divine orchestration in relationships, seeing God\'s hand through people who uplift and inspire. (Hebrews 1:14, Moroni 7:29-31, D&C 46:22)'
	},
	[Gift.belief]: {
		shortName: 'belief in the testimonies of others',
		name: 'The Gift of Capacity to Believe the Words of Those Who Testify of Jesus Christ',
		icon: '',
		color: '#AFC0EA',
		develop: ['Study the witnesses of Christ in the Book of Mormon and New Testament.', 'Invite friends or family to share their spiritual experiences with you.'],
		description: 'The gift of belief is the capacity to accept and trust the words of those who testify of Jesus Christ. It reflects a pure and open-hearted faith, enabling you to quickly recognize and embrace truth. This gift brings a childlike trust in God\'s messengers and inspires deeper spiritual conviction. (Mosiah 26:15, D&C 46:14)'
	},
	[Gift.testimony]: {
		shortName: 'bearing testimony',
		name: 'The Gift of Bearing Mighty Testimony',
		icon: '',
		color: '#F6C1B2',
		develop: ['Share your testimony online or with a non-member friend.', 'Prepare a "5-minute testimony" that focuses on core truths you know.', 'Share your testimony in fast and testimony meeting.'],
		description: 'The gift of bearing a mighty testimony is the ability to powerfully witness of Jesus Christ with clarity and conviction. It stirs the hearts of listeners and strengthens their faith. Those with this gift testify with spiritual authority, bringing others to Christ through their words and example. (D&C 100:5-8, Alma 4:19)'
	},
	[Gift.prayer]: {
		shortName: 'prayer',
		name: 'The Gift of Offering Prayer',
		icon: '',
		color: '#FFD08D',
		develop: ['Volunteer to offer the prayer in classes or family settings.', 'Record specific expressions of gratitude or requests for blessings in a journal before you pray.'],
		description: 'The gift of offering prayer is the ability to commune with God in a deeply meaningful and faith-filled way. It involves praying with genuine intent, humility, and spiritual power. Those with this gift offer heartfelt petitions, lifting others through intercessory prayer and inviting divine intervention. (James 5:16, D&C 46:28-29)'
	},
	[Gift.guidance]: {
		shortName: 'guidance',
		name: 'The Gift of Looking to God for Guidance',
		icon: '',
		color: '#BD7F8E',
		develop: ['Begin each day with the prayer, "What would You have me do today?"', 'Study examples in scripture of people who sought divine direction.', 'Record how God has guided you in past decisions.'],
		description: 'The gift of seeking God\'s guidance is the ability to regularly turn to Him for direction, wisdom, and clarity. It involves humility and a consistent reliance on personal revelation. Those with this gift are quick to counsel with the Lord in all their doings, trusting His hand in their decisions. (Proverbs 3:5-6, D&C 46:30-31)'
	},
	[Gift.judgement]: {
		shortName: 'non-judgement',
		name: 'The Gift of Not Passing Judgement',
		icon: '',
		color: '#E3A9B1',
		develop: ['Read or listen to stories that expand your empathy for people with different experiences.', 'Share your own experiences of growth to create space for others\' imperfections.', 'Practice assuming the best about others—especially in tense moments.'],
		description: 'The gift of not passing judgment is the ability to show mercy, compassion, and empathy without condemning others. It involves recognizing the worth and potential of every soul. Those with this gift extend grace, overlook faults, and view others through the lens of love and understanding. (Matthew 7:1-2, D&C 46:32)'
	},
	[Gift.contention]: {
		shortName: 'avoiding contention',
		name: 'The Gift of Avoiding Contention',
		icon: '',
		color: '#BCBC82',
		develop: ['Practice active listening in conversations and try to understand before responding.', 'Mediate conflicts or tense situations with gentleness.'],
		description: 'The gift of avoiding contention is the ability to foster peace and unity, even in divisive circumstances. It reflects meekness, patience, and emotional restraint. Those with this gift diffuse conflict, promote reconciliation, and bring harmony to relationships. (3 Nephi 11:29-30, D&C 46:33)'
	}
}