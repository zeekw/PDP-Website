var findOld = function(){
  var UpcomingData = JSON.parse(document.getElementById('hiddenDataContainer').innerText)
  console.log(UpcomingData)
  for(var i=0; i<UpcomingData.length; i++){
    if(Date.parse(UpcomingData[i].date) < (new Date().getTime())){
      console.log(Date.parse(UpcomingData[i].date) + " is less than " + (new Date().getTime()))
      console.log("Marking " + UpcomingData[i].title)
    }
  }
}

findOld()
//
// markOldEvents(_ids){
//   for(var i=0; i<_ids.length; i++){
//     var mutations = JSON.stringify({ "mutations": [ { "patch": { "id": _ids[0], "set": { "old": true } } } ] });
//     this.MutateSanity(mutations)
//   }
// }
//
// MutateSanity(mutations){
//   if(typeof XMLHttpRequest !== "undefined"){
//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.addEventListener("readystatechange", function () {
//       if (this.readyState === 4) {
//         // console.log(this.responseText);
//       }
//     });
//     xhr.open("POST", "https://ocpl5ulk.api.sanity.io/v1/data/mutate/pdp-data");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.setRequestHeader("Authorization", "Bearer " + process.env.SANITY_TOKEN);
//     xhr.send(mutations);
//   }
// }
