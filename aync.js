window.onload = function(){
  
  $.get("dataz/tweets.json").then(function(tweets){
    console.log(tweets);
    return $.get("dataz/friends.json");
  }).then(function(friends){
    console.log(friends);
    return $.get("dataz/videos.json");
  }).then(function(videos){
    console.log(videos);
  });
  
  // function get(url){
  //   return new Promise(function(resolve, reject){
  //     var xhttp = new XMLHttpRequest();
  //     xhttp.open("GET", url, true);
  //     xhttp.onload = function(){
  //       if (xhttp.status ==200){
  //         resolve(JSON.parse(xhttp.response));
  //       } else{
  //         reject(xhttp.statusText);
  //       }
        
  //       };
  //       xhttp.onerror = function(){
  //         reject(xhttp.statusText);
  //       };
  //     xhttp.send();
  //   })
  // }
  
  // var promise = get("dataz/tweets.json");
  // promise.then(function(tweets){
  //   console.log(tweets);
  //   return get("dataz/friends.json")
  // }).then(function(friends){
  //   console.log(friends)
  //   return get("dataz/videos.json")
  // }).then(function(videos){
  //   console.log(videos);
  // }).catch(function(error){
  //   console.log(error);
  // });
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