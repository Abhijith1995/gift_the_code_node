module.exports = {
  data: [
    {
      user_id: "foobar1234",
      category: "INCOME",
      subcategory: "Employment",
      amount: 900,
      date: new Date(),
      type: "INCOME"
    },
    {
      user_id: "foobar1234",
      category: "HOUSING",
      subcategory: "Rent",
      amount: 500,
      date: new Date(),
      type: "EXPENSE"
    },
    {
      user_id: "foobar",
      category: "INCOME",
      subcategory: "Employment",
      amount: 1200,
      date: new Date(2016,9,1),
      type: "INCOME"
    },
    {
      user_id: "foobar",
      category: "HOUSING",
      subcategory: "Rent",
      amount: 800,
      date: new Date(2016,9,15),
      type: "EXPENSE"
    },
    {
      user_id: "foobar",
      category: "HOUSING",
      subcategory: "HEAT",
      amount: 100,
      date: new Date(2016,8,19),
      type: "EXPENSE"
    },
  ]
};
