//URL format 
//Key - f26891a097b8476fa62ac3889cea547a

//ajax call



// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// url += '?' + $.param({'api-key': "f26891a097b8476fa62ac3889cea547a"});

// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f26891a097b8476fa62ac3889cea547a


// Built by LucyBot. www.lucybot.com


console.log("this is working");

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f26891a097b8476fa62ac3889cea547a"
var searchTerm = ""
var articleNum = 0;
var startYear = 0;
var endYear = 0;



$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  for (var i = 0; i < result.response.docs.length; i++) {
	console.log(result.response.docs[i].headline);
}
  })

.fail(function(err) {
  throw err;

});

$("#search-btn").on("click", function(){

	searchTerm = $("#search-term").val();
	articleNum = $("#sel1").val();
	startYear = $("#start-year").val();
	endYear = $("#end-year").val();

});