const cds = require("@sap/cds");
const SequenceHelper = require("./lib/SequenceHelper");

module.exports = cds.service.impl(async (service) => {
	const db = await cds.connect.to("db");
	const { IFLT0001 } = service.entities;

	service.before("CREATE", IFLT0001, async (context) => {
		const flownoId = new SequenceHelper({
			db: db,
			sequence: "FLOWNO_ID",
			table: context.query._target.query._target["@cds.persistence.name"],
			field: "FLOWNO"
		});

        context.data.FLOWNO = await flownoId.getNextNumber();
	});
});