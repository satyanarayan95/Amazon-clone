(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(104);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");;
;// CONCATENATED MODULE: ./src/components/Banner.jsx





function Banner() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
      autoPlay: true,
      infiniteLoop: true,
      showIndicators: false,
      showStatus: false,
      showThumbs: false,
      interval: 5000,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://links.papareact.com/gi1",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://links.papareact.com/6ff",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://links.papareact.com/7ma",
          alt: ""
        })
      })]
    })]
  });
}

/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(237);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(802);
// EXTERNAL MODULE: external "react-currency-formatter"
var external_react_currency_formatter_ = __webpack_require__(381);
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/slices/basketSlice.js
var basketSlice = __webpack_require__(290);
;// CONCATENATED MODULE: ./src/components/Products.jsx








const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({
  id,
  price,
  description,
  category,
  image,
  title
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();

  const addItemToBasket = () => {
    const product = {
      id,
      price: price * 60,
      description,
      category,
      image,
      title,
      hasPrime,
      rating
    };
    dispatch((0,basketSlice/* addToBasket */.H)(product));
  };

  const {
    0: rating
  } = (0,external_react_.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const {
    0: hasPrime
  } = (0,external_react_.useState)(Math.random() > 0.5);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/jsx_runtime_.jsx(esm/* StarIcon */.r7p, {
        className: "h-5 text-yellow-500"
      }, i))
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
        quantity: price * 60,
        currency: "INR"
      })
    }), hasPrime && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-2 ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs text-gray-500",
        children: "FREE Next-day Delivery"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "mt-auto button",
      onClick: addItemToBasket,
      children: "Add to Basket"
    })]
  });
}

/* harmony default export */ var components_Products = (Products);
;// CONCATENATED MODULE: ./src/components/ProductFeed.jsx



function ProductFeed({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52",
    children: [products.slice(0, 4).map(({
      id,
      price,
      description,
      category,
      image,
      title
    }) => /*#__PURE__*/jsx_runtime_.jsx(components_Products, {
      id: id,
      price: price,
      description: description,
      category: category,
      image: image,
      title: title
    }, id)), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(({
        id,
        price,
        description,
        category,
        image,
        title
      }) => /*#__PURE__*/jsx_runtime_.jsx(components_Products, {
        id: id,
        price: price,
        description: description,
        category: category,
        image: image,
        title: title
      }, id))
    }), products.slice(5, products.length).map(({
      id,
      price,
      description,
      category,
      image,
      title
    }) => /*#__PURE__*/jsx_runtime_.jsx(components_Products, {
      id: id,
      price: price,
      description: description,
      category: category,
      image: image,
      title: title
    }, id))]
  });
}
;// CONCATENATED MODULE: ./src/pages/index.js







function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Amazon 2.0"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* Header */.h, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductFeed, {
        products: products
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const session = await (0,client_.getSession)(context);
  let products = await fetch("https://fakestoreapi.com/products").then(res => res.json()); // const newProduct={
  //   ...products,
  //   price:products.price*60
  // }
  // products=newProduct;

  return {
    props: {
      products,
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,383,802,290,237], function() { return __webpack_exec__(221); });
module.exports = __webpack_exports__;

})();