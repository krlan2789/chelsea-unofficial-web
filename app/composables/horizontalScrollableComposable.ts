let prev: (name: string, auto?: boolean) => void;
let next: (name: string, auto?: boolean) => void;
let isScrolledToStart: (el: HTMLElement) => boolean;
let isScrolledToEnd: (el: HTMLElement) => boolean;
let watchNavbtn: (current: HTMLElement) => void;
let btnAvailability: (selectors: string, condition: () => boolean) => void;

const watchedElements: Record<string, HTMLElement> = {};
const scrollables: Record<string, HTMLElement> = {};

export const useHorizontalScrollable = (containerSelector: string, itemSelector: string, prevBtnSelector?: string, nextBtnSelector?: string) => {
	const currentScrollable = (container: string) => {
		let current = scrollables[container];
		if (current == null || current == undefined) {
			scrollables[container] = current = document.querySelector(container) as HTMLElement;
		}
		return current;
	};

	const elementWidth = computed(() => {
		let itemElement = document.querySelector(itemSelector) as HTMLElement | null;
		const width = itemElement ? itemElement.clientWidth : (currentScrollable(containerSelector).clientWidth ?? 0);

		return width;
	});

	isScrolledToStart = (el: HTMLElement): boolean => {
		const val = el.scrollLeft <= 0;
		return val;
	};

	isScrolledToEnd = (el: HTMLElement): boolean => {
		const val = el.scrollLeft + el.clientWidth >= el.scrollWidth;
		return val;
	};

	prev = (container: string, auto?: boolean) => {
		if (currentScrollable(container)) {
			currentScrollable(container).scrollBy({
				left: isScrolledToStart(currentScrollable(container)) && auto ? currentScrollable(container).scrollLeft + currentScrollable(container).clientWidth : -elementWidth.value,
				behavior: "smooth"
			});
			watchNavbtn(currentScrollable(container));
		}
	};

	next = (container: string, auto?: boolean) => {
		if (currentScrollable(container)) {
			currentScrollable(container).scrollBy({
				left: isScrolledToEnd(currentScrollable(container)) && auto ? -currentScrollable(container).scrollLeft - currentScrollable(container).clientWidth : elementWidth.value,
				behavior: "smooth"
			});
			watchNavbtn(currentScrollable(container));

		}
	};

	btnAvailability = (selectors: string, condition: () => boolean) => {
		let currentElement = watchedElements[selectors];
		if (currentElement == null || currentElement == undefined) {
			watchedElements[selectors] = currentElement = document.querySelector(selectors) as HTMLElement;
		}
		if (currentElement) {
			if (condition()) {
				if (!currentElement.classList.contains("hidden")) currentElement.classList.add("hidden");
			} else {
				currentElement.classList.remove("hidden");
			}
		}
	};

	watchNavbtn = (current: HTMLElement) => {
		if (prevBtnSelector) btnAvailability(prevBtnSelector, () => isScrolledToStart(current));
		if (nextBtnSelector) btnAvailability(nextBtnSelector, () => isScrolledToEnd(current));
	};

	return {
		prev,
		next, //isScrolledToStart, isScrolledToEnd, watchNavbtn, btnAvailability
	};
};
