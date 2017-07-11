$(document).ready(function() {
  $("#counting").submit(function(event) {
    event.preventDefault();
    var count = parseInt($("#count").val());
    var limit = parseInt($("#limit").val());
    var results =[];

    if (count > limit){
      return alert("invalid input. Limit should be greater than count.")
    } else{
      for(var index = count; index <= limit; index += count ){
        results.push(index);

      }
      $("#results").append('<li>'+ results +'</li>');

      // results.forEach(function(result) {
      //   $("#results").append('<li>'+ result +'</li>');
      // });

      $(".output").show();
    }


  });
});
