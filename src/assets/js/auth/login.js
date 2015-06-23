var FIRE = "https://opinfo.firebaseio.com/members.json";
var FIRE_URL = "https://opinfo.firebaseio.com"
var profile;
var fb = new Firebase(FIREs_URL);
//login function
$().submit(function() {
  var $email = $().val();
  var $password = $().val();

})

//register function
$().submit(function() {
  var $email = $().val();
  var $password = $().val();

  fb.newUser({}, function(err, userData) {
    if (err) {
      alert(err.toString());
    } else {
      doLogin(email, password);
    };
  });
});

//logout function



//save profile edits