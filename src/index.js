module.exports = function check(str, bracketsConfig) {
    let lengthStr = str.length;

    bracketsConfig = bracketsConfig.map(element => {
        return element.join("");
    });

    for (let i = 0; i < lengthStr; i += 2) {
        for (let j = 0; j < bracketsConfig.length; j++)
            str = str.replace(bracketsConfig[j], "");
        if (str.length == 0) return true;
    }

    return false;
};
