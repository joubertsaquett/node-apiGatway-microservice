
exports.listDefault = async (req, res) => {

    res.status(200).send(
        {
            method: 'get - /',
            success: true,
            result: {}
        }
    );

}

exports.listUser = async (req, res) => {

    res.status(200).send(
        {
            method: 'get - /list',
            success: true,
            result: {
                "random": 39
            }
        }
    );

}