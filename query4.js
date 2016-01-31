/**
 *  Update the weather delay column for the flights which were delayed on more than 30 mins.
 */

function print_query4(n){
	
	if(n == 1){
		return db.ontime.update(
 { DepDelay: { $gt: 30 } },
 { $set: { WeatherDelay: 10 } },
 { multi: true }
 )
	}
	
	var before = new Date()
	
	db.ontime.update(
 { DepDelay: { $gt: 30 } },
 { $set: { WeatherDelay: 10 } },
 { multi: true }
 )
	
	var after = new Date()
	execution_mills = after - before
	return "query time = "+execution_mills
}
