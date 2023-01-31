import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap\");*{font-family:Nunito Sans,sans-serif}.card{background:#fff;border-radius:15px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);height:322px;margin:10px;position:relative;width:182px}.card-img-top-disable{opacity:.5}.card-img-top,.card-img-top-disable{border-radius:15px 15px 0 0;width:100%}.card-body{display:block;margin-top:-10px;padding:0 9px}.title-product{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#000;display:-webkit-box;overflow:hidden;width:165px}.price,.title-product{font-size:14px;font-weight:700;line-height:17px}.price{color:#ff753a;display:block;margin-top:-10px}.price-discount{color:#b0aeae;font-size:13px;font-weight:500;line-height:15px;padding-bottom:3px;text-decoration:line-through}.discount{display:flex;margin-top:-10px}.card-discount{background:hsla(0,100%,84%,.78);border-radius:10px;color:#f2000f;font-size:12px;font-weight:700;height:15px;line-height:15px;margin-left:8px;text-align:center;width:32px}.button-add{background:#32aaed;color:#fff}.button-add,.button-out-of-stock{border:none;border-radius:6px;font-size:14px;font-weight:600;height:35px;line-height:17px;margin-top:7px;width:165px}.button-out-of-stock{background:#efeaea;color:#777171}.card-small{background:#fff;border-radius:12px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);height:298px;margin:10px;position:relative;width:159px}.card-img-top-small{border-radius:12px 12px 0 0;width:100%}.button-add-small{background:#32aaed;border:none;border-radius:6px;color:#fff;font-size:14px;font-weight:600;height:35px;line-height:17px;margin-top:7px;width:140.52px}@media screen and (max-width:768px){.card{border-radius:12px;height:253px;width:132px}.card-body{padding:0 6px}.card-img-top,.card-img-top-disable{border-radius:12px 12px 0 0}.title-product{font-size:11px;width:122px}.price{font-size:11px}.price-discount{font-size:8px}.card-discount{font-size:8px;height:14px;width:23px}.button-add,.button-out-of-stock{font-size:11px;height:28px;width:120px}.card-small{border-radius:10px;height:238px;width:117px}.card-img-top-small{border-radius:10px 10px 0 0;width:100%}.button-add-small{font-size:11px;height:28px;width:106.08px}}";
styleInject(css_248z);

var ProductCard = function ProductCard(props) {
  var type = props.type === "disable" ? /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp",
    className: "card-img-top-disable"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-product"
  }, "NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga"), /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, "Rp. 3.550.000"), /*#__PURE__*/React.createElement("div", {
    className: "discount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-discount"
  }, "Rp. 1000.0000"), /*#__PURE__*/React.createElement("span", {
    className: "card-discount"
  }, "99%")), /*#__PURE__*/React.createElement("button", {
    className: "button-out-of-stock"
  }, "Out of stock"))) : /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp",
    className: "card-img-top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-product"
  }, "NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga"), /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, "Rp. 3.550.000"), /*#__PURE__*/React.createElement("div", {
    className: "discount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-discount"
  }, "Rp. 1000.0000"), /*#__PURE__*/React.createElement("span", {
    className: "card-discount"
  }, "99%")), /*#__PURE__*/React.createElement("button", {
    className: "button-add"
  }, "Add to bag")));
  var size = props.size === "small" ? /*#__PURE__*/React.createElement("div", {
    className: "card-small"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp",
    className: "card-img-top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-product"
  }, "NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga"), /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, "Rp. 3.550.000"), /*#__PURE__*/React.createElement("div", {
    className: "discount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-discount"
  }, "Rp. 1000.0000"), /*#__PURE__*/React.createElement("span", {
    className: "card-discount"
  }, "99%")), /*#__PURE__*/React.createElement("button", {
    className: "button-add-small"
  }, "Add to bag"))) : /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/tiarahardiy/phpprograte/main/img.webp",
    className: "card-img-top-small"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title-product"
  }, "NIKE AJ1 Retro High White University Blue Jeans Sepatu Olahraga"), /*#__PURE__*/React.createElement("p", {
    className: "price"
  }, "Rp. 3.550.000"), /*#__PURE__*/React.createElement("div", {
    className: "discount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-discount"
  }, "Rp. 1000.0000"), /*#__PURE__*/React.createElement("span", {
    className: "card-discount"
  }, "99%")), /*#__PURE__*/React.createElement("button", {
    className: "button-add"
  }, "Add to bag")));
  var product = props.type === "disable" ? type : size;
  return /*#__PURE__*/React.createElement("div", null, product);
};

export { ProductCard as default };
