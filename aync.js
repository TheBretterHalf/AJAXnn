window.onload = function(){
  
  function handleError(jqXHR, textStatus, error){
    console.log(error)
  }
  
  $.ajax({
    type:"GET",
    url:"dataz/tweets.json",
    success: cbTweets,
    error: handleError
  });
  
  function cbTweets(data){
      console.log(data);
      
      $.ajax({
        type:"GET",
        url:"dataz/friends.json",
        success: cbFriends,
        error: handleError
      });
    }
    function cbFriends(data){
          console.log(data);
          
          $.ajax({
            type:"GET",
            url:"dataz/videos.json",
            success: function(data){
              console.log(data);
            },
            error: handleError
          });
        }

};
/* Ready States

0-request not initialized
1-request has been set up
2-request has been sent
3-request is in process
4-request is complete
*/


// var fruits = ["banana", "apple", "pear"];
//   fruits.forEach(function(val){
//     console.log(val);
//   });

  // function callback(val){
  //   console.log(val);
  // }
  
  // var fruits = ["banana", "apple", "pear"];
  // fruits.forEach(callback);
  // console.log("done")
  
    // function cb(data){
  //   console.lgog(data);
  // }
  // $.get("dataz/tweets.json", function(data){
  //   console.log(data)
  // });
  // console.log("test");