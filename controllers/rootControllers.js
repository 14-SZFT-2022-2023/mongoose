const getRootRoute = (req, res) => {
    const active = [true, false, false];
    res.render('index', { active: active });
};

module.exports = { getRootRoute };
