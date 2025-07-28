import type INewsCardProp from "./INewsCardProp";

export default interface INewsProp {
	limit?: number;
	data?: INewsCardProp[];
	lazy?: boolean;
}
