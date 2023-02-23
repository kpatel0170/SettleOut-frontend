import React from "react";
import "./UserDetail.css"
function UserDetail ()  {
    return (
     <>
   

   <html>
	<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		<title>Add Contact</title>
	</head>
<body>
<div class="container">
  <div class="row header">
  
    <h1>Edit your Profile <p></p><img src="https://cdn.discordapp.com/attachments/1072226973365051522/1078135428781195294/person-icon-1675.png"></img>

    </h1>
    
    <h3>Fill out the fields to edit your profile!</h3>
    
  </div>
  <div class="row body">
    <form id="add-contact-form" action="#">
      <ul>
        
        <li>
          <p class="left">
            <label for="firstname">first name<span class="req">*</span></label>
            <input type="text" name="firstname" placeholder="John" />
          </p>
        
          <p class="pull-right">
            <label for="lastname">last name<span class="req">*</span></label>
            <input type="text" name="lastname" placeholder="Smith" />      
          </p>
        </li>
        <p class="left">
            <label for="dob">birthday</label>
            <input type="text" id="birthday" name="birthday" placeholder="dd-mm-yyyy" />
          </p>
        <li><div class="divider"></div></li>
        <li>
          <label for="personal">Personal Address</label>
        </li><li>
          <p class="left">
            <label for="street">street</label>
            <input type="text" name="street" placeholder="Street" />
          </p>
          <p class="pull-center">
            <label for="city">city</label>
            <input type="text" name="city" placeholder="City" />      
          </p>
      
        </li>
        <li>
          <p class="left">
            <label for="country">country</label>
            <input type="text" name="country" placeholder="Country" />
          </p>
          <p class="pull-center">
            <label for="state">state</label>
            <input type="text" name="state" placeholder="State" />    
          </p>
          
        </li>
        <li>
          <p class="left">  
            <label for="cellphone">cell phone</label>
            <input type="text" name="cellphone" placeholder="Cellphone" />
          </p>
          <p class="pull-center">
            <label for="postal-code">postal code</label>
            <input type="text" name="postal-code" placeholder="Postal Code" />
          </p>

         
        </li> 
        
        <li>
          <p>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
        </li>        
        <li>
          <div class="divider"></div>
        </li>
        
        <li>
          <input class="btn btn-submit" type="submit" value="Save" /><span></span>
          <input class="btn btn-submit" type="submit" value="Cancel" />
         
        </li>
        
      </ul>
    </form>  
  </div>
</div>
</body>
</html>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" ></script>
<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/themes/cupertino/jquery-ui.css" ></link>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js" ></script>
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.js" ></script>
<link rel="stylesheet" type="text/css" href="form-css.css"></link>
<script src="form-validate.js"></script>




    </>
    );
    }
    export default UserDetail;