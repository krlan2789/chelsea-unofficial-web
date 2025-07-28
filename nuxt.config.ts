import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	app: {
		head: {
			title: "#KTBFFH - Unofficial Chelsea Fans Club",
		},
	},
	modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/scripts"],
	appConfig: {
		nuxt: {
			dark: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/main.css"],
	nitro: {
		experimental: {
			openAPI: true
		}
	}
});
