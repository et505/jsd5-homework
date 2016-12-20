/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

// primer

var menu = {}
 
 menu.items = {
   "dishes" :[
     {
       "name" : "Eggs Benedict",
       "serves" : 1,
       "meal" : "Brunch"
     },
     {
      "name" : "Wiener Schnitzel",
      "serves" : 4,
      "meal" : "Dinner"
   },
    {
       "name" : "Porcini mushroom soup",
       "serves" : "6",
       "meal" : "Lunch"
     },
    {
       "name" : "Avocado toast",
       "serves" : "2",
       "meal" : "Breakfast"
     }
 ]
}

 var source = $('#recipes').html();
 var template = Handlebars.compile(source);
 var compiledTemplate = template(menu.items);
 $('body').append(compiledTemplate)