const stripe = require("stripe")(
  "sk_test_51LJfngFovhV1KGZAUlna8uzHduRPyAImsCzjFckCHVQ93h1nnl6uTw6WONIiYWtwnfOgRTVcjlh0yi6Tr14kyAYY00ihDyTQHt"
);

const uuid = require("uuid");
const router = require("express").Router();

router.post("/payment", (req, res) => {
  const { payment, token } = req.body;
  console.log("Product", product);
  console.log("Price", product.price);
  // To avoid duplication for payments
  const idempotencyKey = uuid();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charger.create(
        {
          amount: product.price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of $(product.name)`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
    });
});
