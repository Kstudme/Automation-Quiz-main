function testSuccess ()
{
    document.getElementById("one").value="one";
    document.getElementById("two").value="two";
    document.getElementById("three").value="three";
    document.getElementById("four").value="four";
    document.getElementById("submit").click();
  
    console.log ("test success");
}
function testFailure ()
{
    document.getElementById("one").value="one";
    document.getElementById("submit").click();
    console.log ("test failure");
}
testSuccess();
testFailure();
