const getUser = (req, res) => {
    res.status(200).json({ 
      name: "John Doe", 
      age: 30, 
      location: "New York",
      contact: "01930264879",
    });
};

module.exports = {
    getUser,
}