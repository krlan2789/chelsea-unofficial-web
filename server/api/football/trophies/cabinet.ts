import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default cachedEventHandler(async () => {
	try {
		const filePath = join(__dirname, "../../server/api/football/", `trophy_cabinet.json`);
		const data = await readFile(filePath, "utf-8");
		return JSON.parse(data);
	} catch (err) {
		return { error: `Trophy cabinet data not found.` };
	}
});
