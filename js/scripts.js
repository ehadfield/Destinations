function MyTravelBook(){
  this.destinations = [];
  this.currentId = 0;
}

MyTravelBook.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
};

// var travelbook = new MyTravelBook();
//
// travelbook.addDestination("Greece");
// travelbook.addDestination("Croatia");
// travelbook.addDestination("Singapore");
// travelbook.addDestination("Taiwan");

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
  return this.place + ", " + this.timeOfYear + ", " + this.landMark + ", " + this.review;
};

// var destination1  = new destination("Greece", ["Parthenon Temple", "Santorini", "Windmills in Cyclades"], "spring", "loved it!");
// var destination2 = new destination("Croatia", ["Dubrovnic", "Plitvice Lakes", "Hvar"], "spring", "better than Greece");
// var destination3 = new destination("Singapore", ["Haka Stands", "Marina Bay Sands"], "fall", "expensive, don't stay for long");
// var destination4 = new destination("Taiwan", ["Taipei 101", "Longdong", "Gongguang"], "fall", "learn rock climbing");

//
// $(document).ready(function()  {
//   $("form#destination").submit(function(event) {
//     event.preventDefault();
//     var Greece = $("input#greece").val();
//     var Croatia = $("input#croatia").val();
//     var Singapore = $("input#singapore").val();
//     var Taiwan = $("input#taiwan").val();
//
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedPhoneNumber = $("input#new-phone-number").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
//     addressBook.addContact(newContact);
//     console.log(addressBook.contacts);
//   });
// });
