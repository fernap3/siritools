process.chdir(__dirname);

const dotenv = require("dotenv");
dotenv.config();
const sql = require("@fernap3/sql");

(async () => {
	const rows = await sql.doQuery(`SELECT pr_author, COUNT(*) as num_open
		FROM PullRequest
		WHERE pr_state = 'OPEN'
		GROUP BY pr_author
		ORDER BY COUNT(*) DESC
		LIMIT 1
	`, []);
	
	console.log(`${rows[0].pr_author} has the most open pull requests with ${rows[0].num_open}`)

	sql.closePool();
})();
