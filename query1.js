/**
 * Print all information from the collection
 */

function print_all_info(n){
	
	if(n == 1){
		return db.ontime.find()
	}
	
	var before = new Date()
	
	db.ontime.find()
	
	var after = new Date()
	execution_mills = after - before
	return "query time = "+execution_mills
}
