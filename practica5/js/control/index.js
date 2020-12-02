$(document).ready(function(){
    $("#butSubmit").click(function (e) { 
       var DNI, empName, surname, phone, birthdate, salary;
       
       DNI = $("#DNI").val();
       empName = $("#empName").val();
       phone = $("#phone").val();
       surname = $("#surname").val();
       birthdate = $("#birtdate").val();
       salary = $("salary").val();
    });

    var newEmployee = new Employee(DNI,empName,surname,phone,birthdate,salary);

})