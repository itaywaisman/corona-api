import {Module} from "@nestjs/common";
import {BusinessController} from "./business.controller";
import {BusinessService} from "./business.service";
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessSchema } from './business.model';

@Module({
    imports: [MongooseModule.forFeature([{name:'Business',schema: BusinessSchema}])],
    controllers:[BusinessController],
    providers: [BusinessService]
})
export class BusinessModule {

}
