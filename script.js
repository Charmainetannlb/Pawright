/*function collect() {
  var HDBApproved = document.querySelector('input[name="HDBapproved"]:checked').value;
  var DOB = document.getElementById("Age1").value;
  var Active = document.querySelector('input[name="character"]:checked').value;
  var Calm = document.querySelector('input[name="calm"]:checked').value;
  var FoodMo = document.querySelector('input[name="foodMo"]:checked').value;
  var Intelligent = document.querySelector('input[name="intelligent"]:checked').value;
  var Outgoing = document.querySelector('input[name="outgoing"]:checked').value;
  var Cat = document.querySelector('input[name="cat"]:checked').value;
  var Child = document.querySelector('input[name="child"]:checked').value;
  var DogOther = document.querySelector('input[name="dogOther"]:checked').value;

  console.log("HDBApproved:", HDBApproved);
  console.log("DOB:", DOB);
  console.log("Active:", Active);
  console.log("Calm:", Calm);
  console.log("FoodMo:", FoodMo);
  console.log("Intelligent:", Intelligent);
  console.log("Outgoing:", Outgoing);
  console.log("Cat:", Cat);
  console.log("Child:", Child);
  console.log("DogOther:", DogOther);
}*/

function collect() {
  var HDBApprovedInput = document.querySelector('input[name="HDBapproved"]:checked');
  var DOBInput = document.getElementById("Age1");
  var ActiveInput = document.querySelector('input[name="Active"]:checked');
  var CalmInput = document.querySelector('input[name="Calm"]:checked');
  var FoodMoInput = document.querySelector('input[name="FoodMo"]:checked');
  var IntelligentInput = document.querySelector('input[name="Intelligent"]:checked');
  var OutgoingInput = document.querySelector('input[name="Outgoing"]:checked');
  var CatInput = document.querySelector('input[name="Cat"]:checked');
  var ChildInput = document.querySelector('input[name="Child"]:checked');
  var DogOtherInput = document.querySelector('input[name="DogOther"]:checked');

  console.log("HDBApproved input:", HDBApprovedInput);
  console.log("DOB input:", DOBInput);
  console.log("Active input:", ActiveInput);
  console.log("Calm input:", CalmInput);
  console.log("FoodMo input:", FoodMoInput);
  console.log("Intelligent input:", IntelligentInput);
  console.log("Outgoing input:", OutgoingInput);
  console.log("Cat input:", CatInput);
  console.log("Child input:", ChildInput);
  console.log("DogOther input:", DogOtherInput);

  // Now let's try to retrieve the values
  var HDBApproved = HDBApprovedInput ? HDBApprovedInput.value : null;
  var DOB = DOBInput ? DOBInput.value : null;
  var Active = ActiveInput ? ActiveInput.value : null;
  var Calm = CalmInput ? CalmInput.value : null;
  var FoodMo = FoodMoInput ? FoodMoInput.value : null;
  var Intelligent = IntelligentInput ? IntelligentInput.value : null;
  var Outgoing = OutgoingInput ? OutgoingInput.value : null;
  var Cat = CatInput ? CatInput.value : null;
  var Child = ChildInput ? ChildInput.value : null;
  var DogOther = DogOtherInput ? DogOtherInput.value : null;

  console.log("HDBApproved:", HDBApproved);
  console.log("DOB:", DOB);
  console.log("Active:", Active);
  console.log("Calm:", Calm);
  console.log("FoodMo:", FoodMo);
  console.log("Intelligent:", Intelligent);
  console.log("Outgoing:", Outgoing);
  console.log("Cat:", Cat);
  console.log("Child:", Child);
  console.log("DogOther:", DogOther);
}


document.querySelectorAll('input[name="HDBapproved"]').forEach(function(radio) {
    //This grabs all the goddamn buttons called HDBapproved
    radio.addEventListener('click', function() {
        //The instruction for these radio buttons is to add a listener event
      document.getElementById("HDBphoto").classList.add('hidden')
      document.getElementById("Age1").classList.remove('hidden');
    });
  });



  document.querySelectorAll('input[name="ageDog"]').forEach(function(radio) {
    //This grabs all the goddamn buttons called ageDog
    radio.addEventListener('click', function() {
        //The instruction for these radio buttons is to add a listener event
      document.getElementById("Age1").classList.add('hidden')
      document.getElementById("character").classList.remove('hidden');
    });
  });
 


  document.querySelectorAll('input[class="personality"]').forEach(function(checkbox) {
    //This grabs all the goddamn buttons called personality
    checkbox.addEventListener('click', function() {
      var maxChecked = 2;
      var checkboxes = document.querySelectorAll('input[class="personality"]');
      
        var checkedCount = 0;
        // Count the number of checkboxes checked
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            checkedCount++;
          }
        });
        // If the number of checked checkboxes exceeds the limit, prevent further checks
        if (checkedCount > maxChecked) {
          this.checked = false; // Uncheck the checkbox that was just checked
          alert('You can only check up to ' + maxChecked + ' checkboxes.');
        }    
    });
  });



  // Get a reference to the button element
var button = document.getElementById("Next");

// Attach an event listener to the button
button.addEventListener("click", function() {
  // Code to execute when the button is clicked
  document.getElementById("character").classList.add('hidden')
  document.getElementById("lifestyle").classList.remove('hidden');
});

var button = document.getElementById("Done");
 // Attach an event listener to the button
 button.addEventListener("click", function() {
  collect();
document.querySelectorAll('input[class="others"]').forEach(function(checkbox) {
        //The instruction for these checkboxes is to add a listener event
      document.getElementById("lifestyle").classList.add('hidden')
      document.getElementById("results").classList.remove('hidden');
    });
  });

var database = new Array();
d3.csv("Data/Doggos17052024 - Sheet1.csv", 
    function(data) {
      database.push(data);
      /*console.log(data.Active);
      console.log(data.Address);
      console.log(data.Calm);
      console.log(data.Cat);
      console.log(data.Child);
      console.log(data.DOB);
      console.log(data.DogOther);
      console.log(data.FoodMo);
      console.log(data.Gender);
      console.log(data.HBDApproved);
      console.log(data.Holdingshel);
      console.log(data.ImageLink);
      console.log(data.Intelligent);
      console.log(data.Name);
      console.log(data.Outgoing);*/
    }
  );
console.log(database);



/*function collect() {
  var HDBApproved = document.getElementById("HDBphoto").value;
  var DOB = document.getElementById("Age1").value;
  var Active = document.getElementById("character").value;
  var Calm = document.getElementById("character").value;
  var FoodMo = document.getElementById("character").value;
  var Intelligent = document.getElementById("character").value;
  var Outgoing = document.getElementById("character").value;
  var Cat = document.getElementById("lifestyle").value;
  var Child = document.getElementById("lifestyle").value;
  var DogOther = document.getElementById("lifestyle").value;
  var text = "";
console.log();''
}*/

