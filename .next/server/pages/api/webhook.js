(function() {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": function() { return /* binding */ config; },
  "default": function() { return /* binding */ webhook; }
});

;// CONCATENATED MODULE: external "micro"
var external_micro_namespaceObject = require("micro");;
;// CONCATENATED MODULE: external "firebase-admin"
var external_firebase_admin_namespaceObject = require("firebase-admin");;
;// CONCATENATED MODULE: ./src/pages/api/webhook.js

 //secure a connection to firebase from backend

const serviceAccount = __webpack_require__(202);

const app = !external_firebase_admin_namespaceObject.apps.length ? external_firebase_admin_namespaceObject.initializeApp({
  credential: external_firebase_admin_namespaceObject.credential.cert(serviceAccount)
}) : external_firebase_admin_namespaceObject.app(); //Establish connection to stripe

const stripe = __webpack_require__(464)(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillingOrder = async session => {
  console.log("fulfillingOrder", session);
  return app.firestore().collection("users").doc(session.metadata.email).collection("orders").doc(session.id).set({
    amount: session.amount_total / 100,
    amount_shipping: session.total_details.amount_shipping / 100,
    images: JSON.parse(session.metadata.images),
    timestamp: external_firebase_admin_namespaceObject.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log(`Success :Order ${session.id} had been added to the DB`);
  });
};

/* harmony default export */ var webhook = (async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await (0,external_micro_namespaceObject.buffer)(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event; //verify that the Event posted came from stripe

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error :${err.message}`);
    } //handle the checkout.session.completed event


    if (event.type === 'checkout.session.completed') {
      const session = event.data.object; //fulfill the order...

      return fulfillingOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook error :${err.message}`));
    }
  }
});
const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

/***/ }),

/***/ 202:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"type":"service_account","project_id":"amzn-nextjs-c147b","private_key_id":"371adaa3661e52ff60f3bc15c02f171d5545c314","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCEf3zk7/8Dqsr\\nNlw6U7+S8KPHsLa1db0K5Qj5k5tyxQqkHVFsVrmdSwwubRqb1I21BB8pQJoQySmj\\npDqZ6vLowqKXHG4YjMDO6XquZYLnMeFSlH6qpxH2BwbKU+8Rz56yEKVgguVKQpiX\\nP9fF8AyjrbdF352MNOrEurPGpB0AY0EqHEFPlSqhKpsSp8Yq+jhB4coMnQ+1nOW2\\nClsV6OMfqIoE2Fyd1ZqmaVd7Kdk7E0+nXvfxLVuenOyFkAotw8EprVv+StVw6jKo\\nlB/aWfDTJTfTPpBh413LxrjyIsmYwkAlDltS/pMuiQiYtz0Dk+cxMHV98xJMSruL\\n30EJGuBNAgMBAAECggEAGqrZQBa961diqvHx02v9p6Xcg4yjVqUCoJQfWxgu5KLx\\n1uJWdXInWFdfKaQBY4deH5Ec7RC8+vCBgcSH7u2LinNwXx5ffI0e02/e1UcKqVU/\\n1pakHzQM8kc95iCJeeOTNXm3F990vXMQP7xcnIzjV7x/siDLp9//oJ/dIz8a4xoD\\nMPcaD80YYAB9MUbyNPatLxpO8Sqkdf5QekZX4QGgHAnfUa1pKuCqLH5bB29MqT9i\\nRAw/QJhdY/+bO6rMlfcTLGvwtjlI6/422jYSWobLEBecSDWaRb8UOHKQTCOyxdRD\\nbw8OHLD2MfOqRzHaDrJYm2PmczVw3IdzU7VNCJViWwKBgQDfIr1sOasvIxApHWMZ\\nVD4VxhW5QVtegmghTveucAPmKX+AOGGd5v0SwpOpCwPOY54NHd4u06eXA2cMa9Ly\\nnw9lZeCmO6Tg+O2JAK+4NtR3O9hR/xcV432mPa7wQy8ujDiDJVPX8PbVnvTJFs6J\\nCcs2J3yQvLNWyAiKZz8AFXRmYwKBgQDep1mEB0/uW0UQ5oZe3aym5zWDua+v5xlZ\\noMVR6b/xwbLbVU4kLS2j1+/nnGLRE5R8lk8hErsrLNBiWHntBeUJLy3/c+8NEH6M\\n52onAcusTuRGh04N9qXoAhwj+J7WsC1tl8ysWoJZg6TJPZhVIJ46Iow6Zw2OhHaA\\neoAjcp9FjwKBgGVxotKoKTZl53v5u0sRrKQziT7PAt4lxXeXMi2hCXTDWw8NEvw5\\nvsafpYgN1O4pBfsKoC+D1EZoqpnQD3h0bgh4V7jblusc4MkPgdPrQY7vqzokEffG\\nlCJXGshqkvHDmBGvj7219FJMURd3AfD1feih7RTUZWhHyvI5XEAKgP/nAoGBAMwO\\ndbTR+siJr0eo7lc9NEGWvu3lnQVKeGozNQQ4hWiszB3GFaKEIUL64WzUX6AcIMb5\\n/rVh9FXCcYzgZ4X6FAmRysdG2jyP9Ftwr1HmjGJzvzSARuH3Pd/fJyk0b2Z0+n1p\\nVPRU0wf05W5l3BmQllLTXM8dqUgHUI+5NXzHTP8zAoGBAN7P5AZAsLy57Aof4dBx\\nax66f1dRZ26xMk3xeEu8+mCqQWGUpgmKjqH9Q45KQ+oxnqIWE2NfMij89dIIIEuC\\nxGp2A8q8/LuX/CrkybHYkO8SEoDn8Si7wNMPGdJZAIGexG5Ui0GHNk8UYYOdB9tb\\ndwXxZz4YzI11EqjrAFZupLk9\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-dr3jq@amzn-nextjs-c147b.iam.gserviceaccount.com","client_id":"112846029820170047370","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dr3jq%40amzn-nextjs-c147b.iam.gserviceaccount.com"}');

/***/ }),

/***/ 464:
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(729));
module.exports = __webpack_exports__;

})();