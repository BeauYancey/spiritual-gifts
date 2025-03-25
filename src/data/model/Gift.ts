export enum Gift {
	wisdom='wisdom',
	knowledge='knowledge',
	faith='faith',
	healing='healing',
	miracles='miracles',
	prophecy='prophecy',
	spirits='spirits',
	tongues='tongues',
	angels='angels',
	belief='belief',
	testimony='testimony',
	prayer='prayer',
	guidance='guidance',
	judgement='judgement',
	contention='contention'
};

export interface GiftInfo {
	shortName: string;
	name: string;
	icon: string;
	color: string;
	description: string
}
