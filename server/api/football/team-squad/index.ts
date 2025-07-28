import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async () => {
	try {
		const filePath = join(process.cwd(), "server/api/football/", `team_squad.json`);
		const data = await readFile(filePath, "utf-8");
		return JSON.parse(data);
	} catch (err) {
		return { error: `Team squad data not found.` };
	}
});
