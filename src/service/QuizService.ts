import { Gift } from "../data/model/Gift";
import { questions } from "../data/questions";
import { DataStore, LocalStorage } from "./DataStore";

export class QuizService {

	private readonly STORAGE_KEY = 'spiritual-gifts'
	private dataStore: DataStore;
	private responses: number[];
	private points: Map<Gift, number> | null;

	public constructor() {
		this.dataStore = new LocalStorage(this.STORAGE_KEY, questions.length);
		this.responses = this.dataStore.getResponses();
		this.points = this.dataStore.getPoints()
	}

	public updateSelection(index: number, value: number): void {
		this.responses[index] = value;
		this.dataStore.setResponse(index, value);
	}

	public getSelection(index: number): number {
		return this.responses[index]
	}

	public computePoints() {
		if (this.responses.findIndex(v => v == null || v == undefined) >= 0) {
			throw new Error('Some questions are unanswered');
		} else {
			const points = new Map<Gift, number>();
			this.responses.forEach((response, index) => {
				questions[index].gifts.forEach(gw => {
					const prev = points.get(gw.gift) || 0;
					points.set(gw.gift, prev + gw.weight * response);
				});
			});
			this.points = points;
			this.dataStore.setPoints(points);
		}
	}

	public getGifts() {
		if (!this.points) {
			throw new Error('There was an error getting your gifts. Have you taken the quiz?')
		}
		else {
			const sortedGifts = Array.from(this.points.entries()).sort((a, b) => b[1] - a[1]).map(a => a[0])
			return {
				top: sortedGifts.slice(0, 3),
				developing: sortedGifts.slice(3, 6),
				explore: sortedGifts.slice(6,8)
			};
		}
	}

	public reset() {
		this.dataStore.reset()
		this.responses = this.dataStore.getResponses()
		this.points = this.dataStore.getPoints()
	}
}