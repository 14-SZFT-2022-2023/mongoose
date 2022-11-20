const getLoginRoute = (req, res) => {
    const active = [false, false, true];
    res.render('login', { active: active });
};

module.exports = { getLoginRoute };
