import { Injectable  } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {}

@Injectable()
export class saveRiderCoordinates {
    constructor(@InjectModel(RiderCoordinates.name)
    private riderCoordinatesModel: Model<RiderCoordinates> 
) {}
    saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDTO) {
        this.riderCoordinatesModel.create(createCoordinatesDTO);
        return createCoordinatesDTO;
    }
}
