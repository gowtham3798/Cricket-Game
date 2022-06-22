var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
var titlecontainer = document.createElement("div");
titlecontainer.setAttribute("id", "title");
titlecontainer.setAttribute("class", "text-center mt-5");
document.body.appendChild(titlecontainer);
var title = document.createElement("h3");
title.innerHTML = "Cricket Game";
(_a = document.getElementById("title")) === null || _a === void 0 ? void 0 : _a.appendChild(title);
var row = document.createElement("div");
row.setAttribute("class", "row mt-5");
row.setAttribute("id", "row");
document.body.appendChild(row);
var column1 = document.createElement("div");
column1.setAttribute("class", "col-sm-4 text-center");
column1.setAttribute("id", "column1");
(_b = document.getElementById("row")) === null || _b === void 0 ? void 0 : _b.appendChild(column1);
var column2 = document.createElement("div");
column2.setAttribute("class", "col-sm-4 text-center");
column2.setAttribute("id", "column2");
(_c = document.getElementById("row")) === null || _c === void 0 ? void 0 : _c.appendChild(column2);
var column3 = document.createElement("div");
column3.setAttribute("class", "col-sm-4 text-center");
column3.setAttribute("id", "column3");
(_d = document.getElementById("row")) === null || _d === void 0 ? void 0 : _d.append(column3);
var titlescrore1 = document.createElement("h5");
titlescrore1.innerHTML = "Team Score 1";
(_e = document.getElementById("column1")) === null || _e === void 0 ? void 0 : _e.appendChild(titlescrore1);
var scrore1 = document.createElement("h2");
scrore1.innerHTML = "0";
scrore1.setAttribute("id", "score1");
(_f = document.getElementById("column1")) === null || _f === void 0 ? void 0 : _f.appendChild(scrore1);
var button1 = document.createElement("button");
button1.setAttribute("class", "btn btn-primary");
button1.setAttribute("id", "hit1");
// button1.setAttribute("onclick", game.displayRuns);
button1.innerHTML = "HIT 1";
(_g = document.getElementById("column1")) === null || _g === void 0 ? void 0 : _g.appendChild(button1);
var timerTitle = document.createElement("h5");
timerTitle.innerHTML = "TIMER";
(_h = document.getElementById("column2")) === null || _h === void 0 ? void 0 : _h.appendChild(timerTitle);
var timer = document.createElement("h2");
timer.innerHTML = "0";
timer.setAttribute("id", "timer");
(_j = document.getElementById("column2")) === null || _j === void 0 ? void 0 : _j.appendChild(timer);
var titlescrore2 = document.createElement("h5");
titlescrore2.innerHTML = "Team Score 2";
(_k = document.getElementById("column3")) === null || _k === void 0 ? void 0 : _k.appendChild(titlescrore2);
var scrore2 = document.createElement("h2");
scrore2.innerHTML = "0";
scrore2.setAttribute("id", "score2");
(_l = document.getElementById("column3")) === null || _l === void 0 ? void 0 : _l.appendChild(scrore2);
var button2 = document.createElement("button");
button2.setAttribute("class", "btn btn-primary disabled");
button2.setAttribute("id", "hit2");
button2.innerHTML = "HIT 2";
(_m = document.getElementById("column3")) === null || _m === void 0 ? void 0 : _m.appendChild(button2);
var row_table = document.createElement("div");
row_table.setAttribute("class", "row mt-5");
row_table.setAttribute("id", "row_table");
document.body.appendChild(row_table);
var table_column1 = document.createElement("div");
table_column1.setAttribute("class", "col-sm-5 text-center");
table_column1.setAttribute("id", "table_column1");
(_o = document.getElementById("row_table")) === null || _o === void 0 ? void 0 : _o.appendChild(table_column1);
var table_column2 = document.createElement("div");
table_column2.setAttribute("class", "col-sm-2 text-center");
table_column2.setAttribute("id", "table_column2");
(_p = document.getElementById("row_table")) === null || _p === void 0 ? void 0 : _p.appendChild(table_column2);
var table_column3 = document.createElement("div");
table_column3.setAttribute("class", "col-sm-5 text-center");
table_column3.setAttribute("id", "table_column3");
(_q = document.getElementById("row_table")) === null || _q === void 0 ? void 0 : _q.append(table_column3);
var table1 = document.createElement("table");
table1.setAttribute("class", "table");
table1.setAttribute("id", "table1");
(_r = document.getElementById("table_column1")) === null || _r === void 0 ? void 0 : _r.appendChild(table1);
var thead1 = document.createElement("thead");
thead1.innerHTML =
    "<tr>\n  <th>Team 1</th>\n  <th>B1</th>\n  <th>B2</th>\n  <th>B3</th>\n  <th>B4</th>\n  <th>B5</th>\n  <th>B6</th>\n  <th>Total</th>\n  </tr>";
(_s = document.getElementById("table1")) === null || _s === void 0 ? void 0 : _s.appendChild(thead1);
thead1.innerHTML +=
    "<tr id=\"t11\"><th>P1</th></tr>\n  <tr id=\"t12\"><th>P2</th></tr>\n  <tr id=\"t13\"><th>P3</th></tr>\n  <tr id=\"t14\"><th>P4</th></tr>\n  <tr id=\"t15\"><th>P5</th></tr>\n  <tr id=\"t16\"><th>P6</th></tr>\n  <tr id=\"t17\"><th>P7</th></tr>\n  <tr id=\"t18\"><th>P8</th></tr>\n  <tr id=\"t19\"><th>P9</th></tr>\n  <tr id=\"t110\"><th>P10</th>\n  </tr>";
var table2 = document.createElement("table");
table2.setAttribute("class", "table");
table2.setAttribute("id", "table2");
(_t = document.getElementById("table_column3")) === null || _t === void 0 ? void 0 : _t.appendChild(table2);
var thead2 = document.createElement("thead");
thead2.innerHTML =
    "<tr>\n  <th>Team 2</th>\n  <th>B1</th>\n  <th>B2</th>\n  <th>B3</th>\n  <th>B4</th>\n  <th>B5</th>\n  <th>B6</th>\n  <th>Total</th>\n  </tr>";
(_u = document.getElementById("table2")) === null || _u === void 0 ? void 0 : _u.appendChild(thead2);
thead2.innerHTML +=
    "<tr id=\"t21\"><th>P1</th></tr>\n  <tr id=\"t22\"><th>P2</th></tr>\n  <tr id=\"t23\"><th>P3</th></tr>\n  <tr id=\"t24\"><th>P4</th></tr>\n  <tr id=\"t25\"><th>P5</th></tr>\n  <tr id=\"t26\"><th>P6</th></tr>\n  <tr id=\"t27\"><th>P7</th></tr>\n  <tr id=\"t28\"><th>P8</th></tr>\n  <tr id=\"t29\"><th>P9</th></tr>\n  <tr id=\"t210\"><th>P10</th></tr>";
var result = document.createElement("h3");
result.setAttribute("id", "result");
(_v = document.getElementById("table_column2")) === null || _v === void 0 ? void 0 : _v.appendChild(result);
var timerDisplay = document.getElementById("timer");
var hitOne = document.getElementById("hit1");
var hitTwo = document.getElementById("hit2");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.balls = 1;
        this.players = 1;
        this.total = 1;
        this.teamTotal = 0;
        this.team = 1;
        this.toggle = 1;
        this.running = 0;
        this.seconds = 0;
        this.randomRunGenerator = function () {
            var run = Math.floor(Math.random() * 7);
            return run;
        };
        this.displayRuns = function () {
            var _a, _b, _c, _d;
            if (_this.players < 11) {
                if (_this.players == 1) {
                    _this.startTimer();
                }
                var totTabData = document.createElement('td');
                if (_this.balls < 7) {
                    var run = _this.randomRunGenerator();
                    var runData = document.createElement('td');
                    runData.innerHTML = "".concat(run);
                    if (run == 0) {
                        (_a = document.getElementById("t".concat(_this.team).concat(_this.players))) === null || _a === void 0 ? void 0 : _a.appendChild(runData);
                        totTabData.innerHTML = "<b style=\"color:red\">".concat(_this.total, "</b>");
                        (_b = document.getElementById("t".concat(_this.team).concat(_this.players))) === null || _b === void 0 ? void 0 : _b.appendChild(totTabData);
                        _this.players++;
                        _this.balls = 1;
                        _this.total = 0;
                    }
                    else {
                        (_c = document.getElementById("t".concat(_this.team).concat(_this.players))) === null || _c === void 0 ? void 0 : _c.appendChild(runData);
                        _this.balls++;
                        _this.total += run;
                        _this.teamTotal += run;
                        document.getElementById("score".concat(_this.team)).innerHTML = _this.teamTotal;
                    }
                }
                else {
                    totTabData.innerHTML = "<b style=\"color:red\">".concat(_this.total, "</b>");
                    (_d = document.getElementById("t".concat(_this.team).concat(_this.players))) === null || _d === void 0 ? void 0 : _d.appendChild(totTabData);
                    _this.players++;
                    _this.balls = 1;
                    _this.total = 0;
                }
            }
            else {
                //WHEN ALL PLAYERS HAVE COMPLETED
                document.getElementById("score".concat(_this.team)).innerHTML = _this.teamTotal;
                _this.resetTimer();
            }
        };
        this.startTimer = function () {
            if (!_this.running) {
                _this.startTime = new Date().getTime();
                _this.tInterval = setInterval(_this.displayTime, 1);
                _this.running = 1;
            }
        };
        this.displayTime = function () {
            _this.updatedTime = new Date().getTime();
            _this.difference = _this.updatedTime - _this.startTime;
            _this.seconds = Math.floor((_this.difference % (1000 * 60)) / 1000);
            _this.seconds = _this.seconds < 10 ? "0" + _this.seconds : _this.seconds;
            timerDisplay.innerHTML = _this.seconds + "s";
            //IF TIMER REACHES 10 SECONDS IT HAS TO RESET FOR NEXT TEAM
            if (_this.seconds == 59) {
                _this.resetTimer();
            }
        };
        this.resetTimer = function () {
            _this.seconds = 0;
            _this.difference = 0;
            _this.running = 0;
            timerDisplay.innerHTML = _this.seconds + 's';
            clearInterval(_this.tInterval);
            if (_this.toggle == 1) {
                hitOne === null || hitOne === void 0 ? void 0 : hitOne.setAttribute('class', 'btn btn-primary-disabled');
                hitOne === null || hitOne === void 0 ? void 0 : hitOne.removeEventListener('click', game.displayRuns, false);
                hitTwo === null || hitTwo === void 0 ? void 0 : hitTwo.setAttribute('class', 'btn btn-primary');
                hitTwo === null || hitTwo === void 0 ? void 0 : hitTwo.addEventListener('click', game.displayRuns);
                _this.team = 2;
                _this.players = 1;
                _this.balls = 1;
                _this.total = 0;
                _this.teamTotal = 0;
                _this.toggle = 0;
            }
            else {
                hitTwo === null || hitTwo === void 0 ? void 0 : hitTwo.setAttribute("class", "btn btn-primary disabled");
                hitTwo === null || hitTwo === void 0 ? void 0 : hitTwo.removeEventListener("click", game.displayRuns, false);
                _this.handleWinner();
            }
        };
        //COMPARES THE RUNS SCORED AND DISPLAY APPROPRIATE RESULTS
        this.handleWinner = function () {
            var team1 = parseInt(document.getElementById("score1").innerHTML);
            var team2 = parseInt(document.getElementById("score2").innerHTML);
            if (team1 > team2) {
                document.getElementById("result").innerHTML = "team 1 is the winner";
            }
            else if (team1 < team2) {
                document.getElementById("result").innerHTML = "team 2 is the winner";
            }
            else {
                document.getElementById("result").innerHTML = "Match Tied";
            }
        };
    }
    return Game;
}());
var game = new Game();
(_w = document.getElementById("hit1")) === null || _w === void 0 ? void 0 : _w.addEventListener("click", game.displayRuns);
