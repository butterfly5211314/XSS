function notEncode(encodeMethod) {
    var arr = [];

    for (var i = 0; i < 256; i++) {
        var char = String.fromCharCode(i);
    
        if (char === encodeMethod(char)) {
            arr.push({
                character: char,
                escape: encodeMethod(char)
            });
        }
    }
    return arr;
}
