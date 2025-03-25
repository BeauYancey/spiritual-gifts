import { Gift } from "./Gift";

export interface Question {
	text: string;
	gifts: GiftWeight[];
}

export interface GiftWeight {
	gift: Gift;
	weight: number;
}