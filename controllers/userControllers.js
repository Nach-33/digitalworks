const getUserData = (req, res) => {
    return res.json({
        messaage: "user found successfully",
        user: req.user
    })
}

module.exports = {getUserData}