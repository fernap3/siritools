process.chdir(__dirname);

const dotenv = require("dotenv");
dotenv.config();
const sql = require("@fernap3/sql");

(async () => {
	const rows = await sql.doQuery("SELECT * FROM Sprint", []);
	
	const currentSprint = rows.find(s => s.state === "active");
	console.log(`The current sprint ends on ${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(currentSprint.endDate)}`);

	sql.closePool();
})();