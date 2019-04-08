function MyTravelBook(){
  this.destinations = [];
  this.currentId = 0;
}

MyTravelBook.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
};

MyTravelBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

MyTravelBook.prototype.findDestination = function(id) {
  for (var i=0; i< this.destinations.length; i++) {
      if (this.destinations[i]) {
        if (this.destinations[i].id == id) {
          return this.destinations[i];
        }
      }
    }
  return false;
};

//Business Logic for Destinations
function destination(place, landMark, timeOfYear, review){
  this.place = place,
  this.landMark = landMark,
  this.timeOfYear = timeOfYear,
  this.review = review
}

destination.prototype.destinationGroup = function() {
  return "<li>" + "Country: " + this.place + "</li>"  + "<li>" + "Landmarks: " + this.landMark + "</li>" + "<li>" + "Time of Year: " + this.timeOfYear + "</li>" + "<li>" + "Review: " + this.review + "</li>";
};

var destination1  = new destination("Greece", ["Parthenon Temple", "Santorini", "Windmills in Cyclades"], "spring", "loved it!");
var destination2 = new destination("Croatia", ["Dubrovnic", "Plitvice Lakes", "Hvar"], "spring", "better than Greece");
var destination3 = new destination("Singapore", ["Haka Stands", "Marina Bay Sands"], "fall", "expensive, don't stay for long");
var destination4 = new destination("Taiwan", ["Taipei 101", "Longdong", "Gongguang"], "fall", "learn rock climbing");

//
$(document).ready(function()  {
  $("#btn1").click(function() {
    $("#greece").html(destination1.destinationGroup());
    $("#greece").toggle();
  });
  $("#btn2").click(function() {
    $("#croatia").html(destination2.destinationGroup());
    $("#croatia").toggle();
  });
  $("#btn3").click(function() {
    $("#singapore").html(destination3.destinationGroup());
    $("#singapore").toggle();
  });
  $("#btn4").click(function() {
    $("#taiwan").html(destination4.destinationGroup());
    $("#taiwan").toggle();
  });
});
