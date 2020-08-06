var request = require("request");
var express = require("express");
const {
  response
} = require("express");
const {
  render
} = require("ejs");
var app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.set("view engine", "ejs");

var options = {
  method: "GET",
  url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
  qs: {
    country: "",
  },
  headers: {
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key": "23dc0d3afamsh94a2c50fbc5855ap17c7dajsnc9fc9e68e9ea",
    useQueryString: false,
  },
};

app.get("/", function (req, res) {
  var url = "https://api.covid19api.com/summary";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);

      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var bata = JSON.parse(body);
          //console.log(data);
          //console.log(options);
          console.log(bata);
          var reported = bata.data.lastReported;
          var checked = bata.data.lastChecked;
          var finalR, finalC;

          var y = reported.slice(0, 4);
          var mNumber = Number(reported.slice(6, 7));
          var m;
          console.log(mNumber)
          switch (mNumber) {
            case 1:
              m = 'JAN'
              break;
            case 2:
              m = 'FEB'
              break;
            case 3:
              m = 'MAR'
              break;
            case 4:
              m = 'APR'
              break;
            case 5:
              m = 'MAY'
              break;
            case 6:
              m = 'JUN'
              break;
            case 7:
              m = 'JUL'
              break;
            case 8:
              m = 'AUG'
              break;
            case 9:
              m = 'SEP'
              break;
            case 10:
              m = 'OCT'
              break;
            case 11:
              m = 'NOV'
              break;
            case 12:
              m = 'DEC'
              break;
          }
          var d = reported.slice(8, 10);

          finalR = d + " " + m + ", " + y;
          reported = finalR;

          //final Checked

          var y = checked.slice(0, 4);
          var mNumber = Number(checked.slice(6, 7));
          var m;
          console.log(mNumber)
          switch (mNumber) {
            case 1:
              m = 'JAN'
              break;
            case 2:
              m = 'FEB'
              break;
            case 3:
              m = 'MAR'
              break;
            case 4:
              m = 'APR'
              break;
            case 5:
              m = 'MAY'
              break;
            case 6:
              m = 'JUN'
              break;
            case 7:
              m = 'JUL'
              break;
            case 8:
              m = 'AUG'
              break;
            case 9:
              m = 'SEP'
              break;
            case 10:
              m = 'OCT'
              break;
            case 11:
              m = 'NOV'
              break;
            case 12:
              m = 'DEC'
              break;
          }
          var d = checked.slice(8, 10);

          finalC = d + " " + m + ", " + y;
          checked = finalC;

          res.render("index", {
            data: data,
            bata: bata,
            report: reported,
            check: checked
          });
        }
      });


    }
  });
});

app.get("/covid19", function (req, res) {
  res.render("covid19");
});

app.get("/results", function (req, res) {
  var country = req.query.search;
  options.qs.country = country;
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      //console.log(data);
      //console.log(options);
      console.log(data);
      res.render("results", {
        data: data
      });
    }
  });
});

app.listen(port, () => console.log("OKay!!!"));
/*
 */