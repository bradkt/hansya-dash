/**
 * Created by brad on 11/8/16.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('CampaignApi', CampaignApi);

    /** @ngInject */
    function CampaignApi($http) {

        return {
            getCampaigns: getCampaigns,
            getCampaign: getCampaign,
            postCampaign: postCampaign,
            getTempCampaign: getTempCampaign
        };

        function getCampaigns() {
            return $http.get('http://localhost:1337/campaign/')
                .then(complete).catch(failed);
        }

        function getCampaign(data, id) {
            return $http.get('http://localhost:1337/campaign/' + id, data)
                .then(complete).catch(failed);
        }

        function postCampaign(data) {
            return $http.post('http://localhost:1337/campaign', data)
                .then(complete).catch(failed);
        }

        function complete(response) {
            return response.data;
        }

        function failed(error) {
            console.log(error.statusText);
        }

        function getTempCampaign() {
            // console.log(data);
           return {
                "meta_data": {
                    "company_id": "6518741551sd1f681sd51",
                    "client_name": "chipotle",
                    "client_location": {
                        "street": "101 Main St.",
                        "city": "Columbus",
                        "state": "OH"
                    },
                    "campaign": {
                        "campaign_id": "asdfasdf",
                        "industry": "fast food",
                        "keyterms": "ai, contextual learning, awesome beards, palm trees",
                        "start": "2016-02-00 10:03:42",
                        "end": "2016-02-29 23:58:42",
                        "platform": "twitter"
                    },
                    "targets": {
                        "conversions": "700",
                        "impressions": "1100",
                        "interactions": "1500",
                        "num_users": "10500",
                        "audience": "women 35-40"
                    },
                    "contact_info": {
                        "phone": "614-555-1010",
                        "email": "bradtracy@hansya.com",
                        "name": "Brad Tracy"
                    }
                },
                "users": [
                    {
                        "name": "Jarrett Parker",
                        "screen_name": "jarrettp_",
                        "location": "Addison, TX",
                        "ip": "127.01.01.01",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "1maclassicman",
                        "screen_name": "DJ Counts",
                        "location": "Addison, TX",
                        "ip": "127.12.01.11",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "Pranav Teja",
                        "screen_name": "Pranavteja912",
                        "location": "Addison, TX",
                        "ip": "127.23.01.21",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "BranDon McLuvin",
                        "screen_name": "BMLS",
                        "location": "Arlington, VA",
                        "ip": "127.24.01.31",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "Tristan Heitkemper",
                        "screen_name": "TheYooper15",
                        "location": "Ashwaubenon, WI",
                        "ip": "127.25.01.41",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "mmichee7",
                        "screen_name": "M M",
                        "location": "Ashwaubenon, WI",
                        "ip": "127.35.01.51",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "chefmarknanna",
                        "screen_name": "mark nanna",
                        "location": "Addison, TX",
                        "ip": "127.45.01.61",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "MorganJLopes",
                        "screen_name": "Morgan J. Lopes",
                        "location": "Atlanta, GA",
                        "ip": "127.55.01.71",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "NicoleSaltos_",
                        "screen_name": "Nicole Saltos",
                        "location": "Atlanta, GA",
                        "ip": "127.67.01.84",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "WPIR984Fm",
                        "screen_name": "WPIR 98.4Fm",
                        "location": "Addison, TX",
                        "ip": "127.76.01.85",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "iJasonYu",
                        "screen_name": "Jay L. Yu",
                        "location": "Atlanta, GA",
                        "ip": "128.76.01.86",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "cherelle8604",
                        "screen_name": "Cherelle",
                        "location": "Atlanta, GA",
                        "ip": "128.76.01.88",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "PoundSignDead",
                        "screen_name": "Delly Ralph",
                        "location": "Atlantic City, NJ",
                        "ip": "128.76.01.92",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "eazyland973",
                        "screen_name": "Eric Ogada",
                        "location": "Atlantic City, NJ",
                        "ip": "128.76.01.93",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "Jakethecole",
                        "screen_name": "jacob.",
                        "location": "Austin, TX",
                        "ip": "128.76.01.94",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "KennyOnTheMic",
                        "screen_name": "KennyOnTheMic \u00a9",
                        "location": "Baltimore, MD",
                        "ip": "128.76.01.95",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "discobop",
                        "screen_name": "Jonathan B. Knox",
                        "location": "Baltimore, MD",
                        "ip": "128.76.01.96",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "ronisunthawed",
                        "screen_name": "Ron",
                        "location": "Baltimore, MD",
                        "ip": "128.76.01.97",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "joskater",
                        "screen_name": "Big Dick Bee 30265",
                        "location": "Barboursville, WV",
                        "ip": "128.76.01.98",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "Zzerbe",
                        "screen_name": "Zack Zerbe",
                        "location": "Bedford, NH",
                        "ip": "128.76.01.99",
                        "profile_image": "jpg"
                    },
                    {
                        "name": "JovonnieB",
                        "screen_name": "Drakonc\u00e9 Minaj",
                        "location": "Atlanta, GA",
                        "ip": "127.86.01.63",
                        "profile_image": "jpg"
                    }
                ],
                "conversations": [
                    {
                        "con_id": "124996802353758208",
                        "depth": "4",
                        "is_reply_to": 0,
                        "convo_thread": ["714996802353758208","741438490576072704","716087721714790400","695043806324989952"]
                    },
                    {
                        "con_id": "134996802353758208",
                        "depth": "2",
                        "is_reply_to": 0,
                        "convo_thread": ["721116795332075520","697907668191735809"]
                    },
                    {
                        "con_id": "144996802353758208",
                        "depth": "3",
                        "is_reply_to": 1,
                        "convo_thread": ["766510720066260992","764239726312390657","751094384117084160"]
                    },
                    {
                        "con_id": "154996802353758208",
                        "depth": "4",
                        "is_reply_to": 1,
                        "convo_thread": ["732978754851639296","726850698206392320","720397327567990784","705469503396823045"]
                    },
                    {
                        "con_id": "164996802353758208",
                        "depth": "6",
                        "is_reply_to": 0,
                        "convo_thread": ["699664860670488576","683420798921605125","683416627698876417","763550065713614848","201615822456889311","701615822456889346"]
                    },
                    {
                        "con_id": "174996802353758208",
                        "depth": "2",
                        "is_reply_to": 1,
                        "convo_thread": ["734913559960899585","768999648002449408"]
                    },
                    {
                        "con_id": "184996802353758208",
                        "depth": "2",
                        "is_reply_to": 1,
                        "convo_thread": ["740324529231138817","701064155650981890"]
                    },
                    {
                        "con_id": "194996802353758208",
                        "depth": "2",
                        "is_reply_to": 0,
                        "convo_thread": ["698918198608031748","698674753033392129"]
                    },
                    {
                        "con_id": "214996802353758208",
                        "depth": "1",
                        "is_reply_to": 0,
                        "convo_thread": ["686998660635324416"]
                    }
                ],
                "metrics": [
                    {
                        "message_id": "714996802353758208",
                        "sentiment_score": ".4",
                        "likes": 8,
                        "shares": 9,
                        "impressions": 110,
                        "engagements": 39,
                        "engagement_rate": 21,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 22:04:5"
                    },
                    {
                        "message_id": "741438490576072704",
                        "sentiment_score": ".3",
                        "likes": 11,
                        "shares": 19,
                        "impressions": 100,
                        "engagements": 119,
                        "engagement_rate": 19,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 20:04:5"
                    },
                    {
                        "message_id": "716087721714790400",
                        "sentiment_score": ".4",
                        "likes": 28,
                        "shares": 29,
                        "impressions": 220,
                        "engagements": 209,
                        "engagement_rate": 29,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 12:04:5"
                    },
                    {
                        "message_id": "695043806324989952",
                        "sentiment_score": ".6",
                        "likes": 38,
                        "shares": 39,
                        "impressions": 30,
                        "engagements": 329,
                        "engagement_rate": 39,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 11:04:5"
                    },
                    {
                        "message_id": "721116795332075520",
                        "sentiment_score": ".9",
                        "likes": 48,
                        "shares": 49,
                        "impressions": 440,
                        "engagements": 49,
                        "engagement_rate": 27,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 10:04:5"
                    },
                    {
                        "message_id": "697907668191735809",
                        "sentiment_score": ".2",
                        "likes": 58,
                        "shares": 59,
                        "impressions": 50,
                        "engagements": 59,
                        "engagement_rate": 31,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-28 10:10:5"
                    },
                    {
                        "message_id": "766510720066260992",
                        "sentiment_score": ".4",
                        "likes": 78,
                        "shares": 79,
                        "impressions": 710,
                        "engagements": 729,
                        "engagement_rate": 27,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-30 22:04:5"
                    },
                    {
                        "message_id": "764239726312390657",
                        "sentiment_score": ".8",
                        "likes": 88,
                        "shares": 89,
                        "impressions": 180,
                        "engagements": 89,
                        "engagement_rate": 28,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-27 20:04:5"
                    },
                    {
                        "message_id": "751094384117084160",
                        "sentiment_score": ".1",
                        "likes": 98,
                        "shares": 99,
                        "impressions": 90,
                        "engagements": 329,
                        "engagement_rate": 39,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-30 12:04:5"
                    },
                    {
                        "message_id": "732978754851639296",
                        "sentiment_score": ".9",
                        "likes": 41,
                        "shares": 42,
                        "impressions": 440,
                        "engagements": 240,
                        "engagement_rate": 25,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 10:24:5"
                    },
                    {
                        "message_id": "726850698206392320",
                        "sentiment_score": ".7",
                        "likes": 51,
                        "shares": 53,
                        "impressions": 550,
                        "engagements": 125,
                        "engagement_rate": 30,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 19:01:5"
                    },
                    {
                        "message_id": "720397327567990784",
                        "sentiment_score": ".3",
                        "likes": 70,
                        "shares": 80,
                        "impressions": 529,
                        "engagements": 229,
                        "engagement_rate": 30,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 18:24:5"
                    },
                    {
                        "message_id": "705469503396823045",
                        "sentiment_score": ".8",
                        "likes": 71,
                        "shares": 82,
                        "impressions": 620,
                        "engagements": 222,
                        "engagement_rate": 31,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 17:14:5"
                    },
                    {
                        "message_id": "699664860670488576",
                        "sentiment_score": ".7",
                        "likes": 220,
                        "shares": 809,
                        "impressions": 1510,
                        "engagements": 329,
                        "engagement_rate": 29,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 16:14:5"
                    },
                    {
                        "message_id": "683420798921605125",
                        "sentiment_score": ".2",
                        "likes": 168,
                        "shares": 189,
                        "impressions": 11010,
                        "engagements": 429,
                        "engagement_rate": 32,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 13:44:5"
                    },
                    {
                        "message_id": "683416627698876417",
                        "sentiment_score": ".3",
                        "likes": 268,
                        "shares": 289,
                        "impressions": 2010,
                        "engagements": 529,
                        "engagement_rate": 38,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 14:09:5"
                    },
                    {
                        "message_id": "763550065713614848",
                        "sentiment_score": ".9",
                        "likes": 368,
                        "shares": 389,
                        "impressions": 3010,
                        "engagements": 629,
                        "engagement_rate": 29,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 15:34:5"
                    },
                    {
                        "message_id": "201615822456889311",
                        "sentiment_score": ".4",
                        "likes": 145,
                        "shares": 459,
                        "impressions": 2055,
                        "engagements": 329,
                        "engagement_rate": 19,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 16:24:5"
                    },
                    {
                        "message_id": "701615822456889346",
                        "sentiment_score": ".7",
                        "likes": 158,
                        "shares": 19,
                        "impressions": 110,
                        "engagements": 39,
                        "engagement_rate": 22,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-30 23:04:5"
                    },
                    {
                        "message_id": "734913559960899585",
                        "sentiment_score": ".6",
                        "likes": 8,
                        "shares": 19,
                        "impressions": 110,
                        "engagements": 39,
                        "engagement_rate": 29,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-28 22:10:5"
                    },
                    {
                        "message_id": "768999648002449408",
                        "sentiment_score": ".4",
                        "likes": 88,
                        "shares": 99,
                        "impressions": 1110,
                        "engagements": 329,
                        "engagement_rate": 30,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-30 10:24:5"
                    },
                    {
                        "message_id": "740324529231138817",
                        "sentiment_score": ".5",
                        "likes": 12,
                        "shares": 45,
                        "impressions": 256,
                        "engagements": 55,
                        "engagement_rate": 18,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-27 23:54:5"
                    },
                    {
                        "message_id": "701064155650981890",
                        "sentiment_score": ".0",
                        "likes": 16,
                        "shares": 33,
                        "impressions": 157,
                        "engagements": 79,
                        "engagement_rate": 49,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 19:24:5"
                    },
                    {
                        "message_id": "698918198608031748",
                        "sentiment_score": ".1",
                        "likes": 628,
                        "shares": 829,
                        "impressions": 10120,
                        "engagements": 759,
                        "engagement_rate": 33,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 17:04:5"
                    },
                    {
                        "message_id": "698674753033392129",
                        "sentiment_score": ".5",
                        "likes": 1768,
                        "shares": 1489,
                        "impressions": 11710,
                        "engagements": 3219,
                        "engagement_rate": 29,
                        "is_ad_clicked": 0,
                        "click_time": "2016-03-29 17:34:5"
                    },
                    {
                        "message_id": "686998660635324416",
                        "sentiment_score": "1",
                        "likes": 71,
                        "shares": 89,
                        "impressions": 1010,
                        "engagements": 529,
                        "engagement_rate": 52,
                        "is_ad_clicked": 1,
                        "click_time": "2016-03-29 13:17:5"
                    }
                ],
                "messages": [
                    {
                        "mid": "714996802353758208",
                        "device": "ios",
                        "datetime": "2016-03-29 22:04:56",
                        "location": "Addison, TX",
                        "text": "Thanks @chipotletweets for the free meal. #dinnertime @ Chipotle https://www.instagram.com/p/BDj0xBXJO2M/",
                        "screen_name": "DJ Counts",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "1maclassicman",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "741438490576072704",
                        "device": "ios",
                        "datetime": "2016-06-10 21:14:46",
                        "location": "Aiken, SC",
                        "text": "Celebrating @skatparker getting a job the best way we know how: Chipotle. So proud of how… https://www.instagram.com/p/BGftDbvhTCg/ ",
                        "screen_name": "DJ Counts",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "1maclassicman",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "716087721714790400",
                        "device": "ios",
                        "datetime": "2016-04-01 22:19:51",
                        "location": "Addison, TX",
                        "text": "Healthy chipotle chicken bowl #tempting #chipotle #mexicangrill ~ Eat healthy ???????? @ Chipotle https://www.instagram.com/p/BDrk2pwMYy5/",
                        "screen_name": "Pranavteja912",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "Pranav Teja",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "695043806324989952",
                        "device": "ios",
                        "datetime": "2016-02-03 19:38:51",
                        "location": "Arlington, VA",
                        "text": "Hold on, pause. Can we talk? Why are people still going to chipotle? ???????????? @ Arlington, Virginia https://www.instagram.com/p/BBWDMZAtKL2/",
                        "screen_name": "BMLS",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "BranDon McLuvin",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "721116795332075520",
                        "device": "ios",
                        "datetime": "2016-04-15 19:23:36",
                        "location": "Ashwaubenon, WI",
                        "text": "Chipotle = life... @chipotletweets @ Chipotle Mexican Grill https://www.instagram.com/p/BEPT0QZKgAp/",
                        "screen_name": "TheYooper15",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "Tristan Heitkemper",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "697907668191735809",
                        "device": "ios",
                        "datetime": "2016-02-11 17:18:49",
                        "location": "Ashwaubenon, WI",
                        "text": "Steak Quesarito Chipotle style. #chipotle #quesarito #food #mexican @ Chipotle Mexican Grill https://www.instagram.com/p/BBqZhv8qgIF/",
                        "screen_name": "TheYooper15",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "Tristan Heitkemper",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "766510720066260992",
                        "device": "ios",
                        "datetime": "2016-08-19 01:42:51",
                        "location": "Athens, OH",
                        "text": "Thanks @chipotletweets for the free meal. #dinnertime @ Chipotle https://www.instagram.com/p/BDj0xBXJO2M/",
                        "screen_name": "M M",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "mmichee7",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "764239726312390657",
                        "device": "ios",
                        "datetime": "2016-08-12 19:18:44",
                        "location": "Atlanta, GA",
                        "text": "Sweet potato fries w/chipotle honey torchedhopbrewing #midtown #atlanta #yummy #noms #weloveatl\u2026 https://www.instagram.com/p/BJBt2qbjkbp/",
                        "screen_name": "mark nanna",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "chefmarknanna",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "751094384117084160",
                        "device": "ios",
                        "datetime": "2016-07-07 12:43:50",
                        "location": "Atlanta, GA",
                        "text": "@whatsyourgusto has arrive on Ponce!\\n\\n50/50, chicken, chipotle mango avocado! @ Gusto https://www.instagram.com/p/BHkUC2hjtZU/",
                        "screen_name": "Morgan J. Lopes",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "MorganJLopes",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "732978754851639296",
                        "device": "ios",
                        "datetime": "2016-05-18 12:58:47",
                        "location": "Atlanta, GA",
                        "text": "When you drive an hour for chipotle after not living 10 mins away\u2026 https://www.instagram.com/p/BFjmAp4lQraqxQC6i9D4g801MIwxUgaDE1uPcY0/\u00a0\u2026",
                        "screen_name": "Nicole Saltos",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "NicoleSaltos_",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "726850698206392320",
                        "device": "ios",
                        "datetime": "2016-05-01 15:08:05",
                        "location": "Atlanta, GA",
                        "text": "#DramaTv2 Two Men Brawl Outside Of Chipotle Restaurant In NYC! http://ow.ly/3zL4cv\u00a0 #WPIRMagazine\u2026 https://www.instagram.com/p/BE4DSvdwfwV/",
                        "screen_name": "WPIR 98.4Fm",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "WPIR984Fm",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "720397327567990784",
                        "device": "ios",
                        "datetime": "2016-04-13 19:44:41",
                        "location": "Atlanta, GA",
                        "text": "Mood: 3ft rule...back the hell off of me... @ Chipotle https://www.instagram.com/p/BEKMo9iNsdB/",
                        "screen_name": "Drakonc\u00e9 Minaj",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "JovonnieB",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "705469503396823045",
                        "device": "ios",
                        "datetime": "2016-03-03 14:06:51",
                        "location": "Atlanta, GA",
                        "text": "Can't resist a burrito bowl from @chipotletweets. #daBOMB #foodporn @ Chipotle Mexican Grill https://www.instagram.com/p/BCgIQGEPv59/",
                        "screen_name": "Jay L. Yu",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "iJasonYu",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "699664860670488576",
                        "device": "ios",
                        "datetime": "2016-02-16 13:41:16",
                        "location": "Atlanta, GA",
                        "text": "Burrito bowl for the win. #lunch #foodgasm chipotletweets @ Chipotle Mexican Grill https://www.instagram.com/p/BB24mw2Pv7h/",
                        "screen_name": "Jay L. Yu",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "iJasonYu",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "683420798921605125",
                        "device": "ios",
                        "datetime": "2016-01-02 17:53:10",
                        "location": "Atlanta, GA",
                        "text": "My chicken bowl... #Chipotle @ Lenox Square https://www.instagram.com/p/BADdqVLyanD/\u00a0",
                        "screen_name": "Cherelle",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "cherelle8604",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "683416627698876417",
                        "device": "ios",
                        "datetime": "2016-01-02 17:36:35",
                        "location": "Atlanta, GA",
                        "text": "Yes this is my first time eating here... #Chipotle @ Chipotle Lenox Square Food Court https://www.instagram.com/p/BADbw7FSair/",
                        "screen_name": "Cherelle",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "cherelle8604",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "763550065713614848",
                        "device": "ios",
                        "datetime": "2016-08-10 21:38:16",
                        "location": "Atlantic City, NJ",
                        "text": "Thanks @chipotletweets for the free meal. #dinnertime @ Chipotle https://www.instagram.com/p/BDj0xBXJO2M/",
                        "screen_name": "Delly Ralph",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "PoundSignDead",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "201615822456889311",
                        "device": "ios",

                        "datetime": "2016-02-21 22:53:42",
                        "location": "Atlantic City, NJ",
                        "text": "Smokehouse Cheddar with chipotle mayo #johnnyrockets #burgers #goodfood #ac #atlanticcity\u2026 https://www.instagram.com/p/BCEvzPSS3bv/",
                        "screen_name": "Eric Ogada",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "eazyland973",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "701615822456889346",
                        "device": "ios",
                        "datetime": "2016-03-29 22:04:56",
                        "location": "Addison, TX",
                        "text": "Thanks @chipotletweets for the free meal. #dinnertime @ Chipotle https://www.instagram.com/p/BDj0xBXJO2M/",
                        "screen_name": "DJ Counts",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "1maclassicman",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "734913559960899585",
                        "device": "ios",
                        "datetime": "2016-05-23 21:07:01",
                        "location": "Austin, TX",
                        "text": "chipotle date soon, okay bby? xoxo @ Och https://www.instagram.com/p/BFxV27yJOts_vlaaZkSFI1Q49R7NHzDBm4eTg80/\u00a0\u2026",
                        "screen_name": "jacob.",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "Jakethecole",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "768999648002449408",
                        "device": "ios",
                        "datetime": "2016-08-25 22:32:58",
                        "location": "Baltimore, MD",
                        "text": "Thanks @chipotletweets for the free meal. #dinnertime @ Chipotle https://www.instagram.com/p/BDj0xBXJO2M/",
                        "screen_name": "KennyOnTheMic \u00a9",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "KennyOnTheMic",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "740324529231138817",
                        "device": "ios",
                        "datetime": "2016-06-07 19:28:16",
                        "location": "Baltimore, MD",
                        "text": "#costillasdecordero #Denver #lamb #ribs #honey #chipotle #bbq #creamy #mojo #garlic #chips\u2026 https://www.instagram.com/p/BGXyer0FSoF/",
                        "screen_name": "Jonathan B. Knox",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "discobop",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "701064155650981890",
                        "device": "ios",
                        "datetime": "2016-02-20 10:21:34",
                        "location": "Baltimore, MD",
                        "text": "French toast bites, scrambled eggs, chipotle grits, fresh fruit with whip cream, and lemon\u2026 https://www.instagram.com/p/BCA07hmFbut/",
                        "screen_name": "Ron",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "ronisunthawed",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "698918198608031748",
                        "device": "ios",
                        "datetime": "2016-02-14 12:14:18",
                        "location": "Barboursville, WV",
                        "text": "Selfie at chipotle yesterday @ Chipotle Mexican Grill https://www.instagram.com/p/BBxlEAaRmKi/\u00a0",
                        "screen_name": "Big Dick Bee 30265",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "joskater",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "698674753033392129",
                        "device": "ios",
                        "datetime": "2016-02-13 20:06:56",
                        "location": "Barboursville, WV",
                        "text": "Early Valentine's Day chipotle with this babe ???????????? @hamhowes @ Chipotle Mexican Grill https://www.instagram.com/p/BBv2WzZxmM9/",
                        "screen_name": "Big Dick Bee 30265",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "joskater",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    },
                    {
                        "mid": "686998660635324416",
                        "device": "ios",
                        "datetime": "2016-01-12 14:50:19",
                        "location": "Bedford, NH",
                        "text": "If you're ever in the area getting your car serviced be sure to stop in here at Chipotle! They\u2026 https://www.instagram.com/p/BAc4ryrsHsA/",
                        "screen_name": "Zack Zerbe",
                        "message_content": [
                            "this is string1",
                            "this is string2",
                            "this is string3"
                        ],
                        "u_name": "Zzerbe",
                        "is_reply_to": 0,
                        "is_ad_link": 0
                    }
                ]
            };
        }
    }

})();