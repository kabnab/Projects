"use strict"
$(document).ready(function(){
    const time= new Date();

    $("#time").text(new Date());

    $("#consusForm").on("submit",function (event) {
        event.preventDefault();
        const name=$('#personalName').val();
        const citizenId=$("#citizenId").val();
        const ssn=$("#ssn").val();
        const state=$("#state").val();
        const isCitizen=$("input[name='radioCitizen']:checked").val();
        const table=$("#tableCansus");
        window.alert("Citizen Id:" + citizenId+"\n" + "SSN:" + ssn+"\n"+"FullName:" + name+"\n"+"State:"+state+"\n"+"Senior:"+isCitizen);

    })
})