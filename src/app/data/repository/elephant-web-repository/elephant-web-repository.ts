import { ElephantRepository } from 'src/app/core/repositories/elephant.repository';
import { ElephantWebRepositoryMapper } from './elephant-web-repository-mapper';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElephantModel } from 'src/app/core/domain/elephant.model';
import { ElephantWebEntity } from './elephant-web-entity';
import { flatMap, map } from 'rxjs/operators';

export class ElephantWebRepository extends ElephantRepository{

    mapper = new ElephantWebRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getElephantById(id: number): Observable<ElephantModel> {
        return this.http
          .get<ElephantWebEntity>('http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/elephants/${id}')
          .pipe(map(this.mapper.mapFrom));
      }
    
      getAllElephants(): Observable<ElephantModel> {
        return this.http
          .get<ElephantWebEntity[]>('http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/elephants')
          .pipe(flatMap((item) => item))
          .pipe(map(this.mapper.mapFrom));
      }
}
