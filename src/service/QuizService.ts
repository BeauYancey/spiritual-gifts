import { Gift } from "../data/model/Gift";
import { questions } from "../data/questions";
import { DataStore, LocalStorage } from "./DataStore";

export class QuizService {

	private readonly STORAGE_KEY = 'spiritual-gifts'
	private dataStore: DataStore;
	private responses: number[];

	public constructor() {
		this.dataStore = new LocalStorage(this.STORAGE_KEY, questions.length);
		this.responses = this.dataStore.getResponses();
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
			throw new Error('some questions are unanswered');
		} else {
			const points = new Map<Gift, number>();
			this.responses.forEach((response, index) => {
				questions[index].gifts.forEach(gw => {
					const prev = points.get(gw.gift) || 0;
					points.set(gw.gift, prev + gw.weight * response);
				});
			});
			this.dataStore.setPoints(points);
			return points;
		}
	}

	public getPoints() {
		return this.dataStore.getPoints();
	}
}