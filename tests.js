QUnit.test("Test getAreaCode function.", function (assert) {
    var num = "(415)555-1234";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test("Test if valid Phone.", function (assert) {
    var num = "(415)777-7777";
    var result = getValidPhone(num);
    assert.deepEqual(result, "valid", "Valid phone test passed");
});

QUnit.test("Test getCoCode function.", function (assert) {
    var num = "(415)555-1234";
    var result = getCoCode(num);
    assert.deepEqual(result, "555", "Valid CO code test passed.");
});

QUnit.test("Test getLineCode function", function (assert) {
    var num = "(415)555-1234";
    var result = getLineCode(num);
    assert.deepEqual(result, "1234", "Valid line code test passed.");
});
