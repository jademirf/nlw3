import { Request, Response} from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'

export default {
    async list(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        const orphanages = await orphanagesRepository.find()

        res.status(200).json(orphanages)
    },

    async show(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        // const orphanage = await orphanagesRepository.findOne({
        //     where: {
        //         id: req.params.id
        //     }
        // })
        const orphanage = await orphanagesRepository.findOne(req.params.id)

        res.status(200).json(orphanage)
    },

    async create (req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = req.body
    
        const orphanagesRepository = getRepository(Orphanage)
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        })
    
        await orphanagesRepository.save(orphanage)
    
        return res.status(201).json({ message: 'criado com sucesso', orphanage })
    }
}