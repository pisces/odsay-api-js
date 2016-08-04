# ktour-api-js

ktour-api-js는 자바스크립트용 한국관광공사 TourApi 입니다.

ktour-api-js is open source to use Korea Tour Api for Javascript.

## Example

### Import

```html
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="<path-to>/ktour-api/ktour-api-1.1.1.js"></script>
```

#### SetUp

```Javascript
KTourApiAppCenter.defaultCenter().setUp("<Your App Name>", "<Your Service Key>", KTourApiAppCenter.languageType.Chs);
```

#### Example for API Call
```Javascript
KTourApiAppCenter.defaultCenter().call({
	path: "<path>", 
	param: new KTourApiListParam(10, 1, {areaCode: null}),
	completion: function(result, error){
		console.log(result, error);
	}
});
```

#### API Paths
```Javascript
"areaCode",
"areaBasedList",
"categoryCode",
"detailCommon",
"detailImage",
"detailInfo",
"detailIntro",
"locationBasedList",
"searchFestival",
"searchKeyword",
"searchStay"
```

#### Change Language Type
```Javascript
KTourApiAppCenter.defaultCenter().lang = KTourApiAppCenter.languageType.Chs

KTourApiAppCenter.languageType = {
    Chs: "ChsService",
    Cht: "ChtService",
    Eng: "EngService",
    Ger: "GerService",
    Fre: "FreService",
    Jpn: "JpnService",
    Rus: "RusService",
    Spn: "SpnService"
};
```

#### Parameters for API Paths
```Javascript
// areaCode
new KTourApiListParam(10, 1, {areaCode: null}

// areaBasedList
new KTourApiListParam(10, 1, {contentTypeId: null, cat1: null, cat2: null, cat3: null, areaCode: null, sigunguCode: null}

// categoryCode
new KTourApiListParam(10, 1, {contentTypeId: null, cat1: null, cat2: null, cat3: null}

// detailCommon
new KTourApiParam({contentId: 1342755, contentTypeId: null, defaultYN: true, firstImageYN: true, areacodeYN: true, catcodeYN: true, addrinfoYN: true, mapinfoYN: true, overviewYN: true, transGuideYN: true}

// detailImage
new KTourApiParam({contentId: 1342755, contentTypeId: 82, imageYN: true}

// detailInfo
new KTourApiParam({contentId: 1342755, contentTypeId: 82, detailYN: true}

// detailIntro
new KTourApiParam({contentId: 1342755, contentTypeId: 82, introYN: true}

// locationBasedList
new KTourApiListParam(10, 1, {contentTypeId: null, mapX: 126.981611, mapY: 37.568477, radius: 1000}

// searchFestival
new KTourApiListParam(10, 1, {contentTypeId: null, eventStartDate: null, eventEndDate: null, areaCode: null, sigunguCode: null}

// searchKeyword
new KTourApiListParam(10, 1, {keyword: "马斋", contentTypeId: null, cat1: null, cat2: null, cat3: null, areaCode: null, sigunguCode: null}

// searchStay
new KTourApiListParam(10, 1, {contentTypeId: null, areaCode: null, sigunguCode: null}
```

## Requirements
JQuery

## Installation
```ruby
// npm command line
npm install --save-dev ktour-api-js

// package.json
"ktour-api-js": "^1.1.1"
```

## Author

Steve Kim, hh963103@gmail.com

## License

ktour-api-js is available under the MIT license. See the LICENSE file for more info.