function info(text) {
  console.log("INFO", text);
  return text;
}
function error(text) {
  console.log("ERROR", text);
  return text;
}
//exportamos las funciones deseadas del modulo
module.exports={info,error};