
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
                "random": 39,
                "random float": 47.162,
                "bool": false,
                "date": "1994-05-08",
                "regEx": "hellooooooooo to you",
                "enum": "json",
                "firstname": "Chere",
                "lastname": "Ethban",
                "city": "Campinas",
                "country": "Martinique",
                "countryCode": "GL"
            }
        }
    );

}