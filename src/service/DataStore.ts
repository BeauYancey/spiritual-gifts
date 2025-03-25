import { Gift } from "../data/model/Gift";

export interface DataStore {
	getResponses: () => number[];
	setResponse: (index: number, value: number) => void;
	getPoints: () => Map<Gift, number> | null;
	setPoints: (points: Map<Gift, number>) => void;
}

export class LocalStorage implements DataStore {

	private pointsKey: string;
	private responsesKey: string;
	private expirationKey: string

	public constructor(key: string, private numQuestions: number) {
		this.pointsKey = key + '-points';
		this.responsesKey = key + '-responses';
		this.expirationKey = key + '-exp';

		const exp = localStorage.getItem(this.expirationKey);
		if (exp && Date.parse(exp) < Date.now()) {
			localStorage.removeItem(this.responsesKey);
			localStorage.removeItem(this.pointsKey);
			localStorage.setItem(this.expirationKey, (Date.now() + (3 * 24 * 60 * 60 * 1000)).toString());
		}
	};

	public getResponses():  number[] {
		const existingData = localStorage.getItem(this.responsesKey);
		if (existingData) {
			return JSON.parse(existingData);
		} else {
			return new Array(this.numQuestions);
		}
	};

	public setResponse(index: number, value: number) {
		const responses = this.getResponses();
		responses[index] = value;
		localStorage.setItem(this.responsesKey, JSON.stringify(responses))
	};

	public getPoints() {
		const existingData = localStorage.getItem(this.pointsKey);
		if (existingData) {
			return new Map<Gift, number>(JSON.parse(existingData));
		} else {
			return null;
		}
	};

	public setPoints(map: Map<Gift, number>) {
		localStorage.setItem(this.pointsKey, JSON.stringify(Array.from(map.entries())));
		localStorage.setItem(this.expirationKey, (Date.now() + (3 * 24 * 60 * 60 * 1000)).toString());
	};
}