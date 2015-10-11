    /* global describe, it, chai */
    // Sample test
    describe("Array", function TestArray() {
      describe("#indexOf()", function TestIndexOf() {
        it("should return -1 when the value is not present", function ErrTest() {
          chai.assert.equal(-1, [1, 2, 3].indexOf(5));
          chai.assert.equal(-1, [1, 2, 3].indexOf(0));
        });
        it("should return 0 when the value is the first element", function ErrTest() {
          chai.assert.equal(0, [1, 2, 3].indexOf(1));
        });
      });
    });
