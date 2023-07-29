var data = "test data";
function testModule() {
    console.log("test module called");
}
// module.exports.data = data;
// module.exports.test = testModule;
module.exports = {data, testModule};