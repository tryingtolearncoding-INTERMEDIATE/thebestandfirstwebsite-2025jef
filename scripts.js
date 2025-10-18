
<form>
<input name="username" id="username" type="text">
<input name="pass" id="pass" type="password">
<input type="button" value="Submit" onclick="myFunction()">
</form> 


<script>
function myFunction(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;

if(user == "Admin" && pass == "Password"){
            window.location.href="win.html"
        alert("correct");
   }else{
    alert("Incorrect username or password");
    }
}
</script>
