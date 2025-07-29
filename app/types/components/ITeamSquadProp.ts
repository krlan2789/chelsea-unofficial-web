import type IPlayerCardProp from "./IPlayerCardProp";

export default interface ITeamSquadProp {
	season?: string;
	data?: IPlayerCardProp[];
}
