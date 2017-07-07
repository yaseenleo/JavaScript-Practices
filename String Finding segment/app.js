var text = "The New Yorker magazine doesn't allow the phrase World War II.They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
for (var i =0; i<text.length; i++) {
    if (text.slice(i,i + 12) === "World War II") {
        text = text.slice(0,i) + "the Second World War" + text.slice(i + 12)
    }
    console.log(text);
}

var text = "The New Yorker magazine doesn't allow the phrase World War II.They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."
var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0,firstChar) + "the Second World War" + text.slice(firstChar + 12);
console.log(text);
console.log(firstChar);
}

var simpleText = "to be or not to be";
var segIndex =  simpleText.lastIndexOf("be");
console.log(segIndex);