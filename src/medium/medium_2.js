import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

export function getAvgMpg() {
    var cty = 0;
    var hwy = 0;
    for (var i=0; i<mpg_data.length; i++) {
        cty += mpg_data[i].city_mpg;
        hwy += mpg_data[i].highway_mpg;
    }
    var average = {};
    average.city = cty/mpg_data.length;
    average.highway = hwy/mpg_data.length;
    return average; 

}

export function getAllYear() {
    var years = [];
    for (var i=0; i<mpg_data.length; i++) {
        years.push(mpg_data[i].year);
    }
    return getStatistics(years);
}

export function getRatioHybrid() {
    var hybrids = 0;
    var allcars = 0;
    for (var i=0; i<mpg_data.length; i++) {
        if (mpg_data[i].hybrid) {
            hybrids++;
        }
        allcars++;
    }
    return hybrids/allcars;
}

export const allCarStats = {
    avgMpg: getAvgMpg(),
    allYearStats: getAllYear(),
    ratioHybrids: getRatioHybrid(),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

 export function getMakerHybrid() {
    //  var makeswithhybrid = mpg_data.filter(h => h.make && h.hybrid);
    //  var result = [];
    //  for (var i=0; i<makeswithhybrid.length; i++) {
    //      var current = {};
    //      var hyids = [];
    //      current.make = makeswithhybrid[i];
    //      for (var j=0; j<mpg_data.length; j++) {
    //         if ((makeswithhybrid[i] == mpg_data[j].make) && mpg_data[j].hybrid) {
    //             hyids.push(mpg_data[j].id);
    //         }
    //      }
    //      current.hybrids = hyids;
    //      result.push(current);
    //  }
    //  return result;
 }

export function getAvgMpgYearHybrid() {
    // var result = {};
    // var year = mpg_data.map(y => y.year);
    // var ishybrid = mpg_data.filter(h => h.hybrid === true);
    // var nothybrid = mpg_data.filter(h => h.hybrid === false);
    // for (var i=0; i<year.length; i++) {
    //     var current = {};
    //     current.hybrid = getAvgMpg(ishybrid.filter(y => y.year == year[i]));
    //     current.notHybrid = getAvgMpg(nothybrid.filter(y => y.year == year[i]));
    //     result[year[i]] = current;
    // }
    // return result; 
}

export const moreStats = {
    makerHybrids: getMakerHybrid(),
    avgMpgByYearAndHybrid: getAvgMpgYearHybrid()
};
