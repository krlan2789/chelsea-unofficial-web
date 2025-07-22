let prev: () => void;
let next: () => void;
let isScrolledToStart: (el: HTMLElement) => boolean;
let isScrolledToEnd: (el: HTMLElement) => boolean;
let watchNavbtn: (current: HTMLElement) => void;
let btnAvailability: (selectors: string, condition: () => boolean) => void;

const elementKeys: string[] = [];
const watchedElements: Ref<Record<string, HTMLElement | null>> = ref({});

export const useHorizontalScrollable = (containerSelector: string, itemSelector: string, prevBtnSelector: string, nextBtnSelector: string) => {
	let scrollable = document.querySelector(containerSelector) as HTMLElement | null;
	let itemElement = document.querySelector(itemSelector) as HTMLElement | null;
	const elementWidth = itemElement ? itemElement.clientWidth : (scrollable?.clientWidth ?? 0);

	prev = () => {
		if (scrollable) {
			scrollable.scrollBy({ left: -elementWidth, behavior: "smooth" });
			watchNavbtn(scrollable);
		}
	};

	next = () => {
		if (scrollable) {
			scrollable.scrollBy({ left: elementWidth, behavior: "smooth" });
			watchNavbtn(scrollable);
		}
	};

	isScrolledToStart = (el: HTMLElement): boolean => {
		const val = el.scrollLeft <= 0;
		return val;
	};

	isScrolledToEnd = (el: HTMLElement): boolean => {
		const val = el.scrollLeft + el.clientWidth >= el.scrollWidth;
		return val;
	};

	btnAvailability = (selectors: string, condition: () => boolean) => {
		let currentElement = watchedElements.value[selectors];
		if (!elementKeys.includes(selectors) || currentElement == null || currentElement == undefined) currentElement = document.querySelector(selectors) as HTMLElement;
		if (currentElement) {
			if (condition()) {
				if (!currentElement.classList.contains("hidden")) currentElement.classList.add("hidden");
			} else {
				currentElement.classList.remove("hidden");
			}
		}
	};

	watchNavbtn = (current: HTMLElement) => {
		btnAvailability(prevBtnSelector, () => isScrolledToStart(current));
		btnAvailability(nextBtnSelector, () => isScrolledToEnd(current));
	};

	return {
		prev,
		next, //, isScrolledToStart, isScrolledToEnd, watchNavbtn, btnAvailability
	};
};
