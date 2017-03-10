/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        return undefined;
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        return undefined;
    }
    return string.slice(startAt, endAt);
}

/**
 * Returns an area code from a phone number: (###)###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Returns an CO code from a phone number: (###)###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The CO code
 * @throws {Error} If the format is incorrect
 */
function getCoCode(phoneNum) {
    var coCode;
    try {
        coCode = between(phoneNum, ")", "-");
        coCode = coCode.trim();
        if (coCode.length == 3 && Number(coCode)) {
            return coCode;
        }
        else {
            throw new Error("Invalid CO code: " + coCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Returns a line code from a phone number: (###)###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code
 * @throws {Error} If the format is incorrect
 */
function getLineCode(phoneNum) {
    var lineCode;
    try {
        lineCode = phoneNum.slice(9);
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        }
        else {
            throw new Error("Invalid line code: " + LineCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Verifies whether the phone number is valid or not
 * @param   {string} phoneNum The phone number
 * @returns {string} Whether the phone number is valid or not
 * @throws {Error} If phone number is invalid
 */
function getValidPhone (phoneNum) {
    var arr = phoneNum.split ("-");
    var array = phoneNum.split (")");
    var first = arr[0].length;
    var second = arr[1].length;
    var third = array[0].length;
    var numLength = phoneNum.length;
    try {
        if (numLength == 13 && first == 8 && second == 4 && third == 4 && arr[0].slice(1,4) <= 999 && array[1].slice(0,3) <= 999 && arr[1] <= 9999) {
        return "valid";
    } else {
            throw new Error("Invalid phone number: " + phoneNum);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Displays the CO code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var coCode = getCoCode(phoneNum);
        outputText = "Your CO code is " + coCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Displays whether the phone number is valid
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayValidPhone(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the output
    try {
        var valid = getValidPhone(phoneNum);
        outputText = "Your phone number is " + valid;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
