



 
fox = ["Gering-ding-ding-ding-dingeringeding!", "Wa-pa-pa-pa-pa-pa-pow!", "Hatee-hatee-hatee-ho!", "Joff-tchoff-tchoffo-tchoffo-tchoff!"];
 
 module.exports = function(bot){
    bot.hear(/What does the fox say?/, function(res) {
   return res.send msg.random fox
});
  
