/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calculate.js":
/*!**********************************!*\
  !*** ./src/modules/calculate.js ***!
  \**********************************/
/***/ ((module) => {

function calculatingTime() {
	const date = new Date(),
          myDay = date.getDay();
      
	let rand,
	    clientLocalHour = date.getHours(),
	    timeFrom = 9,
	    timeTo = 21,
	    emptyValue = 0,
	    demoTest = document.getElementById('workoutsАorToday'),
	    demoTestTwo = document.getElementById('trialWorkouts');

	function workouts(min, max) {
		rand = Math.floor(Math.random() * (max - min) + min);
	return rand;
	}

	if (localStorage.getItem('countWorkdayTrening') === null) {
	    localStorage.setItem('countWorkdayTrening', workouts(10, 20));
	    localStorage.setItem('countWorkdayTrialTrening', workouts(5, 10));
	    localStorage.setItem('countWeekendTrening', workouts(1, 9));
	    localStorage.setItem('countWeekendTrialTrening', workouts(1, 3));
	}

  if (clientLocalHour >= timeFrom && clientLocalHour <= timeTo) {
    if (myDay === 1 || myDay === 2 || myDay === 3 || myDay === 4 || myDay === 5)  {

      demoTest.innerHTML = localStorage.getItem('countWorkdayTrening');
      demoTestTwo.innerHTML = localStorage.getItem('countWorkdayTrialTrening');
       
    } else if (myDay === 0 || myDay === 6){

      demoTest.innerHTML = localStorage.getItem('countWeekendTrening');
      demoTestTwo.innerHTML = localStorage.getItem('countWeekendTrialTrening');
      
    }
  } else {
    demoTest.innerHTML = emptyValue;
    demoTestTwo.innerHTML = emptyValue;
  }
}

module.exports = calculatingTime; 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
    const calculate = __webpack_require__(/*! ./modules/calculate */ "./src/modules/calculate.js");

    calculate();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map