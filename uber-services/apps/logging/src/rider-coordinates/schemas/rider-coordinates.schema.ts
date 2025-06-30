import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// latitude, longitude and id of rider
export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

@Schema()
export class RiderCoordinates {
    @Prop({ required: true, unique: true })
    riderId: string;

    @Prop({ required: true })
    lat: number;

    @Prop({ required: true })
    lon: number;
}

export const RiderCoordinatesSchema = SchemaFactory.createForClass(RiderCoordinates);