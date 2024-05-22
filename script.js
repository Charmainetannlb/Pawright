var database = new Array();

function collect() {
  var HDBApprovedInput = document.querySelector('input[name="HDBapproved"]:checked');
  var DOBInput = document.querySelector('input[name="ageDog"]:checked');
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
  var HDBApproved = HDBApprovedInput ? HDBApprovedInput.value : "N";
  var DOB = DOBInput ? DOBInput.value : null;
  var Active = ActiveInput ? ActiveInput.value : null;
  var Calm = CalmInput ? CalmInput.value : null;
  var FoodMo = FoodMoInput ? FoodMoInput.value : "N";
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
  return {
    'HDBApproved': HDBApproved,
    'DOB': DOB,
    'Active': Active,
    'Calm': Calm,
    'FoodMo': FoodMo,
    'Intelligent': Intelligent,
    'Outgoing': Outgoing,
    'Cat': Cat,
    'Child': Child,
    'DogOther': DogOther,
  }
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
    var options = collect();
    var filtered_dogs = database.filter(function(obj){
      //if (obj.Name == "Adele")
      //  console.log(obj);
      return (obj.HBDApproved == options.HDBApproved) && 
        (obj.AgeValue == options.DOB) &&
        (options.Active == null || (obj.Active == options.Active)) &&
        (options.Calm == null || (obj.Calm == options.Calm)) &&
        (obj.FoodMo == options.FoodMo) && 
        (options.Intelligent == null || (obj.Intelligent == options.Intelligent)) &&
        (options.Outgoing == null || (obj.Outgoing == options.Outgoing)) &&
        (options.Cat == null || (obj.Cat == options.Cat)) &&
        (options.Child == null || (obj.Child == options.Child)) &&
        (options.DogOther == null || (obj.DogOther == options.DogOther)) &&
        true;
    });
    document.querySelectorAll('input[class="others"]').forEach(function(checkbox) {
        //The instruction for these checkboxes is to add a listener event
        document.getElementById("lifestyle").classList.add('hidden')
        document.getElementById("results").classList.remove('hidden');
      }
    );
    console.log(filtered_dogs);
  }
);

function mapAgeType(age) {
  if (age >= 0 && age <= 2) {
    return "puppy";
  } else if (age >= 2 && age <= 5) {
    return "ya";
  } else if (age >= 5 && age <= 9) {
    return "adult";
  } else {
    return "senior";
  }
}

var promise = d3.csv("Data/Doggos17052024 - Sheet1.csv", 
    function(data) {
      var dob = new Date(data.DOB);
      var currentDate = new Date ();
      var age = currentDate.getFullYear() - dob.getFullYear();
      if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        // Subtract 1 from age if the birthday hasn't occurred yet this year
        age--;}
      data.age=age;
      var ageValue = mapAgeType(age);
     data.AgeValue=ageValue; 
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


// Define a function called 'filterByHDBApproved'
function filterByHDBApproved(arr) {
  //console.log(arr);
  // Use the 'filter' method on the array
  // It goes through each object in the array and keeps only those where 'HDBapproved' property is not false.
  return arr.filter(function(o) {
    // For each object (denoted by 'obj'), if its 'HBDapproved' property is not false, keep it.
    //console.log(o);
    return obj.HBDApproved == 'N';
  });
}


console.log(database);
// The function will return a new array containing only the objects where 'HDBapproved' is not false.
//var filteredArray = database.filter(function(o){return o.HBDApproved === 'N';});
//var filteredArray = database.filter(function(o){return true;});

// Output the filtered array to the console.
console.log("filtering");
//console.log(filteredArray);
promise.then(function()
  {
    console.log(database.filter(function(o){return o.HBDApproved == 'Y';}));
  }
)

