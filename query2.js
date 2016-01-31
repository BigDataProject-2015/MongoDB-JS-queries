/**
 * Print dest from the collection
 */

function print_query2(n){
	
	if(n == 1){
		return db.ontime.find(
 				{ },
 				{ dest: 1 }
 				)
	}
	
	var before = new Date()
	
	db.ontime.find(
 					{ },
 					{ dest: 1 }
 					)
	
	var after = new Date()
	execution_mills = after - before
	return "query time = "+execution_mills
}
