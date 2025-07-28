import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
	const year_range = (getRouterParam(event, "year_range") || "2021-2023");
	try {
		const years = year_range.split("-").map(year => year.trim());
		const filePath = join(process.cwd(), "server/api/football", `fixtures_${years[0]}_${years[1]}.json`);
		const data = await readFile(filePath, "utf-8");
		return JSON.parse(data);
	} catch (err) {
		return { error: `Fixtures data for year ${year_range} not found.` };
	}
});
