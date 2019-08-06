function expandLoris() {
    var expandParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandParagraph;
}

function listOfLoris() {
    var lorisList = "<li>Slow Loris</li><li>Fast Loris</li><li>Steady Loris</li>";
    document.getElementById("lorisList").innerHTML = lorisList
}

function peekAtContent() {
    var content = document.getElementById('text').innerHTML  
    document.getElementById('greet').innerHTML = content
}