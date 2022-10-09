const { checkToken } = require("./jwt");

async function checkAuth(data) {
    const token = await req.cookies.token;
    const check_token = await checkToken(token);
    console.log(check_token);
}

module.