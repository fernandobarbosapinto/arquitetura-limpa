import { Mapper } from 'src/app/core/base/mapper';
import { ElephantMockEntity } from './elephant-mock-entity';
import { ElephantModel } from 'src/app/core/domain/elephant.model';

export class ElephantMockRepositoryMapper extends Mapper<ElephantMockEntity, ElephantModel>{

    mapFrom(param: ElephantMockEntity): ElephantModel{
        return {
            name: param.name,
            family: param.family,
            birthday: new Date (param.birthday)
        };
    }

    mapTo(param: ElephantModel): ElephantMockEntity {
        return {
            id: 0,
            name: param.name,
            family: param.family,
            birthday: new Date (param.birthday)
        };
    }
}
