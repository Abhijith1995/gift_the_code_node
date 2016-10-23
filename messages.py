expense_categories = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "generic",
      "elements": [
      {
        "title": "Housing Expenses",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Explore Sub-Categories",
            "payload": "HOME_SUBCATEGORIES"
          }
        ]
      }, {
        "title": "Transporation Expenses",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Explore Sub-Categories",
            "payload": "TRANSP_SUBCATEGORIES"
          }
        ]
      }, {
        "title": "Living Expenses",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Explore Sub-Categories",
            "payload": "LIVING_SUBCATEGORIES"
          }
        ]
      }, {
        "title": "Personal Expenses",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Explore Sub-Categories",
            "payload": "PERSONAL_SUBCATEGORIES"
          }
        ]
      }]
    }
  }
}
print [
    element["title"]
    for element in expense_categories["attachment"]["payload"]["elements"]
]

home_expense_categories = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "generic",
      "elements": [
      {
        "title": "Rent",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Rent Expense",
            "payload": "RENT_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Hydro",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Hydro Expense",
            "payload": "HYDRO_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Cable or Internet",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Cable/Internet Expense",
            "payload": "CABLE_INTERNET_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Phone",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Phone Expense",
            "payload": "PHONE_EXP_SELECTION"
          }
        ]
      }]
    }
  }
}

print [
    element["title"]
    for element in home_expense_categories["attachment"]["payload"]["elements"]
]

transportation_expense_categories = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "generic",
      "elements": [
      {
        "title": "Car",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Car Expense",
            "payload": "CAR_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Gas",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Gas Expense",
            "payload": "GAS_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Parking",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Parking Expense",
            "payload": "PARKING_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Public Transit",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Public Transit Expense",
            "payload": "PUBLIC_TRANSIT_EXP_SELECTION"
          }
        ]
      }]
    }
  }
}
print [
    element["title"]
    for element in transportation_expense_categories["attachment"]["payload"]["elements"]
]

living_expense_categories = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "generic",
      "elements": [
      {
        "title": "Food",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Food Expense",
            "payload": "FOOD_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Clothing",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Clothing/Laundry Expense",
            "payload": "CLOTHING_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Childcare",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Childcare Expense",
            "payload": "CHILDCARE_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Loan",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Loan Payment Expense",
            "payload": "LOAN_PAYMENT_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Credit Card",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Credit Card Expense",
            "payload": "CREDIT_CARD_EXP_SELECTION"
          }
        ]
      }]
    }
  }
}

print [
    element["title"]
    for element in living_expense_categories["attachment"]["payload"]["elements"]
]

personal_expense_categories = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "generic",
      "elements": [
      {
        "title": "Recreation",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Recreation Expense",
            "payload": "RECREATION_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Cigarettes/Alcohol",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Cigarette/Alcohol Expense",
            "payload": "CIGARETTE_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Gifts/Donations",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Gift or Donation Expense",
            "payload": "GIFT_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Vaction/Travel",
        "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Vacation/Travel Expense",
            "payload": "VACATION_EXP_SELECTION"
          }
        ]
      }, {
        "title": "Eating Out",
        "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
        "buttons": [
          {
            "type": "postback",
            "title": "Add Eating Out Expense",
            "payload": "EATING_OUT_EXP_SELECTION"
          }
        ]
      }]
    }
  }
}
print [
    element["title"]
    for element in personal_expense_categories["attachment"]["payload"]["elements"]
]
