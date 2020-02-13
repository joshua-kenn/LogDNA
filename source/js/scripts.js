$(document).ready(function() { 
	
	function validate(formData, jqForm, options) { 
    // formData is an array of objects representing the name and value of each field 
    // that will be sent to the server;  it takes the following form: 
    // 
    // [ 
    //     { name:  username, value: valueOfUsernameInput }, 
    //     { name:  password, value: valueOfPasswordInput } 
    // ] 
    // 
    // To validate, we can examine the contents of this array to see if the 
    // username and password fields have values.  If either value evaluates 
    // to false then we return false from this method. 
 
    for (var i=0; i < formData.length; i++) { 
        if (!formData[i].value) { 
	        $('#formSubmit').addClass('error');
	        $('#formSubmit .form-control').attr('placeholder', 'Please add a message');
            return false; 
        } else{
	        $('#formSubmit').removeClass('error');
        }
    } 
}
    // bind form using ajaxForm 
    $('#formSubmit').ajaxForm({ 
	    beforeSubmit: validate ,
        // target identifies the element(s) to update with the server response 
        target: '#formSubmit', 
 
        // success identifies the function to invoke when the server response 
        // has been received; here we apply a fade-in effect to the new content 
        success: function() { 
             $('#formSubmit').removeClass('error');
             $('#formSubmit').addClass('success');
        } 
        
    }); 
});