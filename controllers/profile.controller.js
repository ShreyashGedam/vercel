const getProfile = (req, res) => {
  return res.status(200).send({
    message: "u are getting the data of the profile",
  });
};

module.exports = { getProfile };
