import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default cachedEventHandler(async (event) => {
	const year = getRouterParam(event, "year") || "2023";

	try {
		const filePath = join(__dirname, "../../server/api/football", `standing_${year}.json`);
		const data = await readFile(filePath, "utf-8");
		return JSON.parse(data);
	} catch (err) {
		return { error: `Standing data for year ${year} not found.` };
	}
});
