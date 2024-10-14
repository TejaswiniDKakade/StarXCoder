var languageSelector = document.getElementById("language-selector");
var codeEditor = document.getElementById("code-editor");
var runButton = document.getElementById("run-button");
var output = document.getElementById("output");

runButton.addEventListener("click", function() {
  var language = languageSelector.value;
  var code = codeEditor.value;

  // Compile and run the code.
  var compiler = new compiler(language);
  var result = compiler.compile(code);
  if (result.errors) {
    output.innerHTML = result.errors.join("<br>");
  } else {
    var interpreter = new interpreter(language);
    var output = interpreter.interpret(result.output);
    output.innerHTML = output;
  }
});
