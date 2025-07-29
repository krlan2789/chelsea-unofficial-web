export const useCurrentHost = () => {
	const host = ref("");
	const protocol = ref("");

	if (import.meta.client) {
		host.value = window.location.host;
		protocol.value = window.location.protocol;
	}

	return { host, protocol };
};
