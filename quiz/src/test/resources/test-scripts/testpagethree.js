function testSuccess ()
{
    let text = "";
    for (let i =0;i<100;i++)
    {   
        text+="A";

    }
    inputs.value =text
    document.getElementById("button").click();
    console.log ("test success");
}
function testFailure ()
{
    let text = "failed text\t";
  
    inputs.value =text
   
 //   document.getElementById("button").focus();
    document.getElementById("button").click();
    console.log ("test failure");
}
testSuccess();
testFailure();
