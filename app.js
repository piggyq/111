//app.js
var wilddog = require('wilddog-weapp-all')
var config = {
  syncURL: 'https://wd2314045701ifftmw.wilddogio.com',
  authDomain: 'wd2314045701ifftmw.wilddog.com'
}
wilddog.initializeApp(config)

var ref = wilddog.sync().ref("/web/saving-data/wildblog/users");
// child() 用来定位到某个节点。
ref.child("user").set({
  "name": "Steve Jobs",
  "tel": "male"
});

App({
  
 
})