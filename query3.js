/**
 *  Print the number of flights for each of the Tail Number
 */

function print_query3(n){
	
	if(n == 1){
		return db.ontime.aggregate([{$group : {_id : "$TailNum", num_flight : {$sum : 1}}}])
	}
	
	var before = new Date()
	
	db.ontime.aggregate([{$group : {_id : "$TailNum", num_flight : {$sum : 1}}}])
	
	var after = new Date()
	execution_mills = after - before
	return "query time = "+execution_mills
}
