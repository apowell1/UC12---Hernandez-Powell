QUnit.test("Test thegetAreaCode function.", function (assert) {
    var num = "(415) 555-1234";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid Area code test passed.");
});

QUnit.test("Test if valid Phone.", function (assert) {
    var num = "(415) 777-7777";
    var result = validPhone(num);
    assert.deepEqual(result, "true");
});

QUnit.test("Test if invalid Phone.", function (assert) {
    var num = "icu-m8";
    var result = validPhone(num);
    assert.deepEqual(result, "false");
});

QUnit.test("Test getCoCode function.", function (assert) {
    var num = "(415) 555-1324";
    var result = getCoCode(num);
    assert.deepEqual(result, "555", "Valid CO code test passed.");
});

QUnit.test("Test getLineCode function", function (assert) {
    var num = "(415) 555-1234";
    var result = getLineCode(num);
    assert.deepEqual(result, "1234", "Valid Line code test passed.");
});
