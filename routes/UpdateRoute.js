const router = require("express").Router();

router.post("/:id", async (req, res) => {
    const postId = await req.params.id;
    console.log(postId);
})

module.exports = router