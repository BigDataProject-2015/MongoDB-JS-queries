

/**
*Add new column to the dataset table
 */

function print_query7(n){
	
	if(n == 1){
		return db.ontime.update(
    { },
    { $set: { AirTimeHours: "" } },
    { multi: true }
)
	}
	
	var before = new Date()
	
	db.ontime.update(
    { },
    { $set: { AirTimeHours: "" } },
    { multi: true }
)
	
	var after = new Date()
	execution_mills = after - before
	return "query time = "+execution_mills
}
