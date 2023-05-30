function removeDash() {
  var input = document.getElementById("text-input").value;
  var output = input.replace(/[-_./\\]/g, " ");
  document.getElementById("output").innerHTML = output;
}

function copyOutput() {
  var output = document.getElementById("output").innerHTML;
  navigator.clipboard.writeText(output).then(function() {
    console.log("Copied to clipboard");
  }, function(err) {
    console.error("Failed to copy: ", err);
  });
}
