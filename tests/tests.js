var serviceKey = "NDQ0My0xNDYzMTA1MjY4NzczLWViZThlMWQzLWZhYmMtNDY1ZS1hOGUxLWQzZmFiY2U2NWUxMQ==";
var svcid = "f78480bc1c06734607e4c7107d0642f3";

QUnit.module("ODSayApiAppCenter", function(){

	ODSayApiAppCenter.defaultCenter().setUp(
		serviceKey,
		svcid
	);

	QUnit.test("defaultCenter", function(assert){
		assert.notOk(null, ODSayApiAppCenter.defaultCenter());
		assert.equal(ODSayApiAppCenter.uniqueInstance, ODSayApiAppCenter.defaultCenter());
	});

	QUnit.test("setUp", function(assert){
		assert.equal(decodeURIComponent(serviceKey), ODSayApiAppCenter.defaultCenter().serviceKey);
		assert.equal(svcid, ODSayApiAppCenter.defaultCenter().svcid);
	});

	QUnit.test("call-path-search-exit", function(assert){
		var async = assert.async();

		var param = {
			changeCount: 0,
			optCount: 0,
			resultCount: 13,
			SX: 127.101624,
			SY: 37.602018,
			EX: 127.010245,
			EY: 37.489199,
			OPT: 0,
			radius: "700:2000",
			SearchType: 0,
			weightTime: "10:5:5:10:10:5"
		};

		ODSayApiAppCenter.defaultCenter().call({
			path: "Path/PathSearch_Exit", 
			param: new ODSayApiParam(param),
			completion: function(result, error){
				assert.ok(result != null);
				assert.ok(result.path.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});

	QUnit.test("call-map-load-lane", function(assert){
		var async = assert.async();

		var param = {
			param: "3:2:340:339@7:2:734:723@5029:1:51:63"
		};

		ODSayApiAppCenter.defaultCenter().call({
			path: "map/LoadLane", 
			param: new ODSayApiParam(param),
			completion: function(result, error){
				assert.ok(result != null);
				assert.ok(result.lane.length > 0);
				assert.ok(error == null);
				async();
			}
		});
	});
});