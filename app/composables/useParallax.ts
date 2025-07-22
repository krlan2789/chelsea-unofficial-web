export const useParallax = (selector: string) => {
	const container = document.querySelector<HTMLElement>(selector);
	if (!container) return;

	const updateParallax = () => {
		const offset = container.scrollLeft;
		const elements = container.querySelectorAll<HTMLElement>(".parallax-bg");

		elements.forEach((el) => {
			// Adjust depth factor to fine-tune effect
			const depth = parseFloat(el.dataset.depth ?? "0.3");
			el.style.transform = `translateX(${offset * depth}px)`;
		});
	};

	container.addEventListener("scroll", updateParallax);
};
