const Box = require('../model/Box')


class BoxController {
    async store (req, res) {

        const box = await Box.create(req.body)
        return res.json(box);
    }

    async show (req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: 1 }}
        });


        console.log(box)
        res.json(Box);
    }
}

module.exports = new BoxController();