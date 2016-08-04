//
//  odsay-api
//	version: 1.0.0
//
//  Created by Steve Kim on 7/20/16.
//  Copyright © 2016 Steve Kim. All rights reserved.
//

( function(global) {

    // ================================================================================================
    //  Class: ODSayApiAppCenter
    // ================================================================================================
    
	var ODSayApiAppCenter = function() {};

	ODSayApiAppCenter.basePath = "http://api.openapi.io/traffic/appleTree/v1/0/";

	ODSayApiAppCenter.defaultCenter = function() {
		if (!ODSayApiAppCenter.uniqueInstance) {
			ODSayApiAppCenter.uniqueInstance = new ODSayApiAppCenter();
		}
		return ODSayApiAppCenter.uniqueInstance;
	};

	ODSayApiAppCenter.prototype = {
		serviceKey: null,
		svcid: null,

		call: function(options) {
			if (this.isEmpty(this.serviceKey)) {
				options.completion(null, new Error(-1, "SERVICE KEY IS UNDEFINED."));
				return null;
			}

			if (this.isEmpty(this.svcid)) {
				options.completion(null, new Error(-1, "SVCID IS UNDEFINED."));
				return null;
			}

			var data = options.param.raw();
			data.svcid = this.svcid;
			data.encoding = "utf-8";
			data.output = "json";
			data.echo = "yes";

			return $.get({
				url: ODSayApiAppCenter.basePath + options.path + ".asp",
    			headers: {"x-waple-authorization": this.serviceKey},
				data: data,
				timeout: 5000,
				success: function(rs){
					if (rs && rs.result) {
						options.completion(rs.result, null);
					} else {
						options.completion(null, new Error(99, "UNKNOWN_ERROR"));
					}
				},
				error: function(err) {
					options.completion(null, err);
				}
			});
		},

		isEmpty: function(value) {
			return value == undefined || value == null || value.length < 1
		},

		setUp: function(serviceKey, svcid) {
			this.serviceKey = decodeURIComponent(serviceKey);
			this.svcid = svcid;
		}
	};

    // ================================================================================================
    //  Class: ODSayApiParam
    // ================================================================================================
    
	var ODSayApiParam = function(param) {
		for (var pName in param) {
			this[pName] = param[pName];
		}
	};

	ODSayApiParam.prototype = {
		raw: function() {
			var object = {};
			for (var key in this) {
				var value = this[key];

				if (!(value instanceof Function)) {
					object[key] = key.match(/^(.*?)YN$/g) ? (value ? "Y" : "N") : value;
				}
			}
			return object;
		}
	};

	window.ODSayApiAppCenter = ODSayApiAppCenter;
	window.ODSayApiParam = ODSayApiParam;

}() );