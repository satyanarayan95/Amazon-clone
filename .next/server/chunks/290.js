exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 290:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ addToBasket; },
/* harmony export */   "Er": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "a1": function() { return /* binding */ selectItems; },
/* harmony export */   "tT": function() { return /* binding */ SelectTotal; }
/* harmony export */ });
/* unused harmony export basketSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  items: []
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const idx = state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      let newBasket = [...state.items];

      if (idx >= 0) {
        newBasket.splice(idx, 1);
      } else {
        console.warn(`can't remove product (id:${action.payload.id}) as its not in the basket`);
      }

      state.items = newBasket;
    }
  }
});
const {
  addToBasket,
  removeFromBasket
} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.basket.items;
const SelectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);
/* harmony default export */ __webpack_exports__["ZP"] = (basketSlice.reducer);

/***/ })

};
;