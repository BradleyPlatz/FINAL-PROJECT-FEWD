window.onload = function() {
    var button = document.getElementById("aButton");
    button.addEventListener("click", function() {
        aModal.style.display = "block";
        aModalMask.style.display = "block";
    });

    var button = document.getElementById("close");
    button.addEventListener("click", function() {
        aModal.style.display = "none";
        aModalMask.style.display = "none";
    });

    var button = document.getElementById("TOS");
    button.addEventListener("click", function() {
        tosModal.style.display = "block";
        aModalMask.style.display = "block";
    });

    var button = document.getElementById("closeTOS");
    button.addEventListener("click", function() {
        tosModal.style.display = "none";
        aModalMask.style.display = "none";
    });
    
  };
  

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // You can do something with the form data here, like sending it to a server or displaying it on the page.

  // Clear the form fields after submission
  form.reset();
});




/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'moderneden.myshopify.com',
      storefrontAccessToken: '0101be0072d51f533d55d9282a4f86fc',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6745710002223',
        node: document.getElementById('product-component-1677258060691'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#4d4d4d"
        },
        "background-color": "#2d2d2d",
        ":focus": {
          "background-color": "#4d4d4d"
        },
        "border-radius": "45px",
        "padding-left": "40px",
        "padding-right": "40px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Buy Now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#4d4d4d"
        },
        "background-color": "#2d2d2d",
        ":focus": {
          "background-color": "#4d4d4d"
        },
        "border-radius": "0px",
        "padding-left": "20px",
        "padding-right": "20px"
      }
    },
    "text": {
      "button": "Buy Now"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#4d4d4d"
        },
        "background-color": "#2d2d2d",
        ":focus": {
          "background-color": "#4d4d4d"
        },
        "border-radius": "0px"
      },
      "title": {
        "color": "#ffffff"
      },
      "header": {
        "color": "#ffffff"
      },
      "lineItems": {
        "color": "#ffffff"
      },
      "subtotalText": {
        "color": "#ffffff"
      },
      "subtotal": {
        "color": "#ffffff"
      },
      "notice": {
        "color": "#ffffff"
      },
      "currency": {
        "color": "#ffffff"
      },
      "close": {
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "empty": {
        "color": "#ffffff"
      },
      "noteDescription": {
        "color": "#ffffff"
      },
      "discountText": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "discountAmount": {
        "color": "#ffffff"
      },
      "cart": {
        "background-color": "#000000"
      },
      "footer": {
        "background-color": "#000000"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#2d2d2d",
        ":hover": {
          "background-color": "#4d4d4d"
        },
        ":focus": {
          "background-color": "#4d4d4d"
        }
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#ffffff"
      },
      "title": {
        "color": "#ffffff"
      },
      "price": {
        "color": "#ffffff"
      },
      "fullPrice": {
        "color": "#ffffff"
      },
      "discount": {
        "color": "#ffffff"
      },
      "discountIcon": {
        "fill": "#ffffff"
      },
      "quantity": {
        "color": "#ffffff"
      },
      "quantityIncrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityDecrement": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      },
      "quantityInput": {
        "color": "#ffffff",
        "border-color": "#ffffff"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
