import { Gift } from "./Gift";

export interface Question {
	text: string;
	gifts: GiftWeight[];
}

interface GiftWeight {
	gift: Gift;
	weight: number;
}