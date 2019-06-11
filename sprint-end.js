process.chdir(__dirname);

const dotenv = require("dotenv");
dotenv.config();
const sql = require("@fernap3/sql");

(async () => {
	const rows = await sql.doQuery("SELECT * FROM Sprint WHERE state = 'active'", []);
	
	const currentSprint = rows[0];
	console.log(`The current sprint ends on ${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(currentSprint.endDate)}`);

	sql.closePool();
})();
