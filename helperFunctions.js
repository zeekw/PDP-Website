import { projectId, dataset } from "./sanity-client.js"

// Sort data by timeDelta value in ascending order
export function sortByTimeDelta(data){
  // Give each announcement/event a "timeDelta" value that is the number of milliseconds between when an announcement was last updated or an event occurs.
  for(var item of data) {
    var itemTime = 0
    if(item._type == "event") {
      var itemTime = Date.parse(item.date)
    }
    else if(item._type == "announcement") {
      var itemTime = Date.parse(item._updatedAt)
    }
    item.timeDelta = Math.abs(itemTime - (new Date).getTime())
  }
  // Sort
  data.sort(function compare(a, b) {
    if (a.timeDelta < b.timeDelta) {
      return -1;
    }
    if (a.timeDelta > b.timeDelta) {
      return 1;
    }
    return 0;
  })
  return data
}

// Custom UrlBuilder
export function SanityImageUrl(image, options){
  // Build assetID
  if(typeof image == "undefined"){
    return null
  }
  var fullRef = image.asset._ref
  var ref = fullRef.split("-")
  var assetID = ref[1]
  var dimensions = ref[2]
  var extension = ref[3]
  var assetID = assetID + "-" + dimensions + "." + extension
  // Assemble baseURL
  var baseArray = ["https://cdn.sanity.io/images", projectId, dataset, assetID]
  var baseURL = baseArray.join("/")
  // Assemble queryString
  var params = []
  for(const key in options){
    var param = key + "=" + options[key]
    params.push(param)
  }
  if(!("fit" in options)){
    params.push("fit=crop")
  }
  if(!("crop" in options)){
    params.push("crop=focalpoint")
    var focalPoint = findFocalPoint(image)
    params.push("fp-x=" + focalPoint.x)
    params.push("fp-y=" + focalPoint.y)
  }
  params.push("q=80")
  params.push("auto=format")
  var queryString = params.join("&")
  // Assemble fullURL
  var fullURL = baseURL + "?" + queryString
  return fullURL
}

export function SortProjects(raw){
  var sorted = []
  var prioritized = []
  var nonPrioritized = []
  for(var i=0; i<raw.length; i++){
    if(raw[i].node.order > 0){
      prioritized.push(raw[i])
    }
    else {
      nonPrioritized.push(raw[i])
    }
  }
  nonPrioritized.sort(function(a, b) {
    return Date.parse(b.node._updatedAt) - Date.parse(a.node._updatedAt)
  })
  sorted = nonPrioritized
  for(var i=0; i<prioritized.length; i++){
    sorted.splice((prioritized[i].node.order - 1), 0, prioritized[i])
  }
  return sorted
}

export function findFocalPoint(image){
  if("hotspot" in image){
    var x = image.hotspot.x
    var y = image.hotspot.y
    return {x: x, y: y}
  }
  else {
    return {x: 0.5, y: 0.5}
  }
}
