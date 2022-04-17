let em = "";

function isEmailValid() {
    em = $.trim($("input[name='email']").val());
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(em)) {
        return true;
    }
    else {
       // Add your code here to handle the error.
       $("emailErrorMessage").html("Missing or invalid email "); 
       return false;  
    }
 }
 function clearResults() {
     $('#output').empty();
     $('#emailErrorMessage').empty();
     $('passwordErrorMessage').empty();
 }

 $('input').focus(function() {
     clearResults();
 });

 $(document).on("submit",function(e) {
     e.preventDefault();
     clearResults();
     $('#output').append("<p>Form output:</p>");
     if (isEmailValid() ) {
         var emvalue = '<p>' + em + '</p>';

         $('#output').append(emvalue);
         var password1 = $("input[name='password1']").val();
         var password2 = $("input[name='password2']").val();
         if ((password1 != '') && (password1 === password2)) {
             $('output').append('Passwords match');
         } else {
             $('#passwordErrorMessage').html("Password missing or doesn't match.");
         }
     }
 });