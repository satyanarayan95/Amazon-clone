(function() {
var exports = {};
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 962:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_orders; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(104);
;// CONCATENATED MODULE: external "firebase"
var external_firebase_namespaceObject = require("firebase");;
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_namespaceObject);
;// CONCATENATED MODULE: ./firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyBO1gPnymaRyHFaeUpgN2gnsILzdDZmHx0",
  authDomain: "amzn-nextjs-c147b.firebaseapp.com",
  projectId: "amzn-nextjs-c147b",
  storageBucket: "amzn-nextjs-c147b.appspot.com",
  messagingSenderId: "828082633901",
  appId: "1:828082633901:web:bb7f77488d22f5c2509a24"
};
const app = !(external_firebase_default()).apps.length ? external_firebase_default().initializeApp(firebaseConfig) : external_firebase_default().app();
const db = app.firestore();
/* harmony default export */ var firebase = (db);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(237);
;// CONCATENATED MODULE: external "moment"
var external_moment_namespaceObject = require("moment");;
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: external "react-currency-formatter"
var external_react_currency_formatter_ = __webpack_require__(381);
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_);
;// CONCATENATED MODULE: ./src/components/Order.jsx




function Order({
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative border rounded-md",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-sm",
          children: "ORDER PLACED"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: external_moment_default().unix(timestamp).format("DD MM YYYY")
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs font-bold",
          children: "TOTAL"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
            quantity: amount,
            currency: "INR"
          }), "- Next Day Delivery", " ", /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
            quantity: amountShipping,
            currency: "INR"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500",
        children: [items.length, " items"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap",
        children: ["ORDER #", id]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "p-5 sm:p-10",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex space-x-6 overflow-x-auto",
        children: images.map(image => /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: image,
          alt: "",
          className: "h-20 sm:h-32 object-contain"
        }))
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/orders.js








function orders({
  orders
}) {
  const [session] = (0,client_.useSession)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* Header */.h, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-screen-lg mx-auto p-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-3xl border-b mb-2 pb-1 border-yellow-400 ",
        children: "Your Orders"
      }), session ? /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "x Orders"
      }) : /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Please sign in to see your orders"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-5 space-y-4",
        children: orders === null || orders === void 0 ? void 0 : orders.map(({
          id,
          amount,
          amountShipping,
          items,
          timestamp,
          images
        }) => /*#__PURE__*/jsx_runtime_.jsx(Order, {
          id: id,
          amount: amount,
          amountShipping: amountShipping,
          items: items,
          timestamp: timestamp,
          images: images
        }))
      })]
    })]
  });
}

/* harmony default export */ var pages_orders = (orders);
async function getServerSideProps(context) {
  const stripe = __webpack_require__(464)(process.env.STRIPE_SECRET_KEY); //get the user's logged in credentials ...


  const session = await (0,client_.getSession)(context);

  if (!session) {
    return {
      props: {}
    };
  } //order details from firebase Db


  const stripeOrders = await firebase.collection("users").doc(session.user.email).collection("orders").orderBy('timestamp', 'desc').get(); //getting corrosponding information for each order in firebase db

  const orders = await Promise.all(stripeOrders.docs.map(async order => ({
    id: order.id,
    amount: order.data().amount,
    amountShipping: order.data().amount_shipping,
    images: order.data().images,
    timestamp: external_moment_default()(order.data().timestamp.toDate()).unix(),
    items: (await stripe.checkout.sessions.listLineItems(order.id, {
      limit: 100
    })).data
  })));
  return {
    props: {
      orders,
      session
    }
  };
}

/***/ }),

/***/ 139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 381:
/***/ (function(module) {

"use strict";
module.exports = require("react-currency-formatter");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 464:
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,383,290,237], function() { return __webpack_exec__(962); });
module.exports = __webpack_exports__;

})();