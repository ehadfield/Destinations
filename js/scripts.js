function MyTravelBook(){
  this.destinations = []
  console.log(MyTravelBook.destinations);
}
  // this.currentId = 0

MyTravelBook.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
  console.log(destination);
}

var travelbook = new MyTravelBook();

travelbook.addDestination("Greece");
travelbook.addDestination("Croatia");
travelbook.addDestination("Singapore");
travelbook.addDestination("Taiwan");


//Business Logic for Destinations
function destination(location, landMark, timeOfYear, notes){
  this.location = location,
  this.landMark = landMark,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}

destination.prototype.destinationGroup = function() {
  return this.location + ", " + this.timeOfYear + ", " + this.landMark + ", " + this.notes;
}

var Greece  = new destination("Greece", ["Parthenon Temple", "Santorini", "Windmills in Cyclades"], "spring", "loved it!");
var Croatia = new destination("Croatia", ["Dubrovnic", "Plitvice Lakes", "Hvar"], "spring", "better than Greece");
var Singapore = new destination("Singapore", ["Haka Stands", "Marina Bay Sands"], "fall", "expensive, don't stay for long");
var Taiwan = new destination("Taiwan", ["Taipei 101", "Longdong", "Gongguang"], "fall", "learn rock climbing");


$(document).ready(function()  {
  $("form#destination").submit(function(event) {
    event.preventDefault();
    var Greece = $("input#greece").val();
    var Croatia = $("input#croatia").val();
    var Singapore = $("input#singapore").val();
    var Taiwan = $("input#taiwan").val();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});
