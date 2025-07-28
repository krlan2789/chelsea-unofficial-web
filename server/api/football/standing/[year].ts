import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
	const year = getRouterParam(event, "year") || "2023";

	try {
		const filePath = join(process.cwd(), "server/api/football", `standing_${year}.json`);
		const data = await readFile(filePath, "utf-8");
		return JSON.parse(data);
	} catch (err) {
		return { error: `Standing data for year ${year} not found.` };
	}
});
