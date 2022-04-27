const UserModel = require('../models/User');

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email } = req.body;

            const user = await UserModel.findOne({ where: { email } });

            if (user) {
                res.status(401).json({ message: 'Usuário já existe com esse email' });
            } else {
                const user = await UserModel.create({ name, email })

                res.status(200).json({ user })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            const user = await UserModel.findOne({ where: { id } });

            if (!user) {
                res.status(401).json({ message: 'Usuário não encontrado' });
            } else {
                const user = await UserModel.update({ name, email }, { where: { id } });

                res.status(200).json({ user })
            }

        } catch (error) {
            res.status(400).json({ error })
        }


    },
    async listUsers(req, res) {
        try {
            const users = await UserModel.findAll();

            if (!users) {
                res.status(401).json({ message: 'Nenhum usuário encontrado' });
            }
            res.status(200).json({ users })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const user = await UserModel.findOne({ where: { id } });
            if (!user) {
                res.status(401).json({ message: 'Usuário não encontrado' });
            } else {
                const user = await UserModel.destroy({ where: { id } });
                res.status(200).json({ ok: true })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    }
}