function testSuccess ()
{
    nameInput.value = `Joe-${rando}`;
    document.getElementById("submitButton").click();
    console.log ("test success");
}
function testFailure ()
{
    nameInput.value ="junk";
    document.getElementById("submitButton").click();
    console.log ("test failure");
}
testSuccess();
testFailure();
