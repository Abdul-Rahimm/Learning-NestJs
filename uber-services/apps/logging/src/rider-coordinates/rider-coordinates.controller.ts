import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor() {}
    @Get()
    getRiderCoordinates() {
        return 'Rider coordinates fetched successfully';
    }

    @Post()
    saveRiderCoordinates(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
        return createCoordinatesDTO;
    }
}
