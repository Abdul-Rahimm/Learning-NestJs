import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCoordinatesDTO{

    @IsNotEmpty()
    @IsString()
    riderId: string;

    @IsNotEmpty()
    @IsNumber()
    lat: number;

    @IsNotEmpty()
    @IsNumber()
    lon: number;

    
}