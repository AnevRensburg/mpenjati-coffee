// Generated from sites/mpenjati-coffee/site.json by make-site.mjs.
import { SiteConfig } from './site.model';

export const SITE: SiteConfig = {
  "name": "Mpenjati Coffee",
  "tagline": "Stir one another",
  "logo": "logo",
  "meta": {
    "title": "Mpenjati Coffee | Farm-roasted coffee from the KZN South Coast",
    "description": "Coffee grown, roasted and served on a farm on the Mpenjati River in Munster, KZN South Coast. Order our blends for delivery across South Africa, or visit the coffee shop, farm stall and roastery."
  },
  "hero": {
    "eyebrow": "Coffee farm · Roastery · Coffee shop",
    "title": "Coffee from our farm to your cup.",
    "lead": "Grown, roasted and served on the banks of the Mpenjati River on the KZN South Coast. Order our blends online, or come and see where your coffee comes from.",
    "image": "hero",
    "imageAlt": "Rows of coffee trees on the Mpenjati farm",
    "cta": "Shop our coffee"
  },
  "highlights": [
    {
      "icon": "leaf",
      "title": "Grown here",
      "text": "Coffee trees on the farm in Munster, KZN."
    },
    {
      "icon": "coffee",
      "title": "Freshly roasted",
      "text": "Medium roasts in our own roastery; dark on request."
    },
    {
      "icon": "truck",
      "title": "Delivered",
      "text": "To coffee lovers and coffee shops across South Africa."
    },
    {
      "icon": "clock",
      "title": "Open daily",
      "text": "Coffee shop and farm stall, 8am to 3pm."
    }
  ],
  "products": {
    "eyebrow": "From the roastery",
    "title": "Our coffee",
    "lead": "Four blends, each with its own story, plus decaf and a few treats from the farm stall. Add what you’d like and we’ll confirm sizes and grind with you.",
    "items": [
      {
        "id": "crossing",
        "name": "The Crossing",
        "description": "For moments that move us closer. 100% Arabica, freshly roasted.",
        "image": "crossing",
        "imageAlt": "A bag of Mpenjati The Crossing coffee",
        "fromPrice": true,
        "options": [
          {
            "label": "",
            "price": 115
          }
        ]
      },
      {
        "id": "neighbour",
        "name": "The Neighbour",
        "description": "Familiar, welcoming and made to share. 100% Arabica.",
        "image": "neighbour",
        "imageAlt": "A bag of Mpenjati The Neighbour coffee",
        "fromPrice": true,
        "options": [
          {
            "label": "",
            "price": 120
          }
        ]
      },
      {
        "id": "bridge",
        "name": "The Bridge",
        "description": "Bringing people together, one cup at a time. 100% Arabica.",
        "image": "bridge",
        "imageAlt": "A bag of Mpenjati The Bridge coffee",
        "badge": "Premium",
        "fromPrice": true,
        "options": [
          {
            "label": "",
            "price": 130
          }
        ]
      },
      {
        "id": "origin",
        "name": "The Origin",
        "description": "Where every journey begins. 100% Arabica.",
        "image": "origin",
        "imageAlt": "A bag of Mpenjati The Origin coffee",
        "fromPrice": true,
        "options": [
          {
            "label": "",
            "price": 37
          }
        ]
      },
      {
        "id": "decaf",
        "name": "Decaf, 250g",
        "description": "All the flavour, none of the caffeine. Roasted by Mpenjati Coffee.",
        "image": "decaf",
        "imageAlt": "A bag of Mpenjati decaf coffee",
        "options": [
          {
            "label": "",
            "price": 150
          }
        ]
      },
      {
        "id": "choc-coffee",
        "name": "Belgian chocolate-coated coffee beans",
        "description": "Roasted coffee beans in Belgian chocolate. Dangerously moreish.",
        "image": "choc-coffee",
        "imageAlt": "Packets of Belgian chocolate-coated coffee beans",
        "options": [
          {
            "label": "",
            "price": 40
          }
        ]
      },
      {
        "id": "macadamias",
        "name": "Simply Macnificent chocolate macadamias",
        "description": "Local macadamias coated in Belgian chocolate.",
        "image": "macadamias",
        "imageAlt": "A packet of chocolate-coated macadamia nuts",
        "fromPrice": true,
        "options": [
          {
            "label": "",
            "price": 95
          }
        ]
      },
      {
        "id": "biscotti",
        "name": "Biscuits & biscotti",
        "description": "Baked in our kitchen to go with your coffee: macadamia, choc chip and Belgian biscotti.",
        "image": "biscotti",
        "imageAlt": "A packet of Mpenjati biscotti",
        "fromPrice": true,
        "options": [
          {
            "label": "",
            "price": 35
          }
        ]
      }
    ]
  },
  "story": {
    "eyebrow": "Our story",
    "title": "It all started with a coffee bean",
    "paragraphs": [
      "Mpenjati Coffee is a coffee farm, roastery and coffee shop overlooking the Mpenjati River in Munster, on the KZN South Coast. It began with a handful of coffee seeds, and the trees grew better than anyone expected.",
      "Today we roast our blends on the farm and send them to coffee lovers and coffee shops all over South Africa. We also roast for other coffee shops.",
      "Visit us for a coffee and something from the kitchen, browse the farm stall, or book a coffee process tour to see the journey from tree to cup. We bring our coffee trailer to events too."
    ],
    "image": "story",
    "imageAlt": "Freshly roasted coffee beans turning in the roaster"
  },
  "gallery": [
    {
      "image": "latte",
      "alt": "A latte with latte art at the Mpenjati coffee shop"
    },
    {
      "image": "hands",
      "alt": "Hands sorting coffee beans"
    },
    {
      "image": "roastery",
      "alt": "Roasting coffee in the Mpenjati roastery"
    },
    {
      "image": "baristas",
      "alt": "Two baristas making coffee"
    }
  ],
  "order": {
    "title": "Order your coffee",
    "lead": "Add your coffee above, fill in your details and the order opens on WhatsApp, ready to send.",
    "steps": [
      "Choose your coffee and treats.",
      "Tell us beans or ground, and press Send.",
      "We confirm sizes, delivery and payment on WhatsApp.",
      "We roast, pack and send your order."
    ],
    "deliveryOptions": [
      {
        "id": "courier",
        "label": "Deliver to me",
        "note": "Anywhere in South Africa; we confirm the cost",
        "needsAddress": true
      },
      {
        "id": "collect",
        "label": "Collect at the farm",
        "note": "P310 Old Main Road, Munster",
        "needsAddress": false
      }
    ],
    "notes": [
      "Let us know if you’d like beans or ground (and for which brewer).",
      "Medium roast as standard; dark roast on request.",
      "Coffee shop or business? Ask about wholesale and roasting for you."
    ]
  },
  "faq": [
    {
      "q": "Can I visit the farm?",
      "a": "Yes. The coffee shop and farm stall are open every day from 8am to 3pm, and we run coffee process tours. Send us a WhatsApp to book a tour."
    },
    {
      "q": "Do you roast for coffee shops?",
      "a": "We do. We supply coffee shops around South Africa and roast for other businesses. Get in touch and tell us what you need."
    },
    {
      "q": "Can you bring coffee to my event?",
      "a": "Our coffee trailer comes to events. Email us with the date, place and number of guests."
    },
    {
      "q": "Beans or ground?",
      "a": "Both. Tell us in your order how you brew (espresso, plunger, filter or moka pot) and we’ll grind it to suit."
    }
  ],
  "contact": {
    "email": "tasty@mpenjaticoffee.co.za",
    "phoneDisplay": "083 262 6616",
    "whatsapp": "27832626616",
    "address": [
      "P310 Old Main Road",
      "Munster, 4278",
      "KZN South Coast"
    ],
    "hours": [
      "Coffee shop & farm stall",
      "Every day, 8:00 – 15:00"
    ],
    "socials": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/mpenjaticoffee"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/mpenjati_coffee"
      }
    ]
  },
  "slug": "mpenjati-coffee"
};
