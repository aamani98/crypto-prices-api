const axios = require("axios");

const prices = async (req, res) => {
  try {
    const response = await axios.get(process.env.END_POINT);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
};

const symbolPrices = async (req, res) => {
  const symbols = req.params.symbols;
  try {
    const response = await axios.get(
      `${process.env.END_POINT}&symbols=${symbols}`
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
};

module.exports = { prices, symbolPrices };
