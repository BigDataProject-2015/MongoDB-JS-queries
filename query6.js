/**
* To calculate various information
 */

function print_query6(n){
	
	if(n == 1){
		return db.ontime.aggregate( [
   {
     $group: {
        _id: "$Month",
        total: { $sum: "$AirTime" },
        average1: { $avg: "$DepDelay" },
        average2: { $avg: "$AirTime" },
        max: { $max: "$AirTime" },
        min: { $min: "$AirTime" },
        count: { $sum: 1 }

     }
   },
   { $sort: { _id: 1 } },
   { $sort: { average1: 1 } }
] )
	}
	
	var before = new Date()
	
	db.ontime.aggregate( [
   {
     $group: {
        _id: "$Month",
        total: { $sum: "$AirTime" },
        average1: { $avg: "$DepDelay" },
        average2: { $avg: "$AirTime" },
        max: { $max: "$AirTime" },
        min: { $min: "$AirTime" },
        count: { $sum: 1 }

     }
   },
   { $sort: { _id: 1 } },
   { $sort: { average1: 1 } }
] )
	
	var after = new Date()
	execution_mills = after - before
	return "query time = "+execution_mills
}