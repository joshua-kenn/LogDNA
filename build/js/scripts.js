$(document).ready(function(){function validate(formData,jqForm,options){for(var i=0;i<formData.length;i++){if(!formData[i].value)return $("#formSubmit").addClass("error"),$("#formSubmit .form-control").attr("placeholder","Please add a message"),!1;$("#formSubmit").removeClass("error")}}$("#formSubmit").ajaxForm({"beforeSubmit":validate,"target":"#formSubmit","success":function(){$("#formSubmit").removeClass("error"),$("#formSubmit").addClass("success")}})});