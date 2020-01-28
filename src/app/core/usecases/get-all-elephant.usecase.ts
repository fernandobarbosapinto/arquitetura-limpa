import { UseCase } from '../base/use-case';
import { ElephantModel } from '../domain/elephant.model';
import { ElephantRepository } from '../repositories/elephant.repository';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GetAllElephantUsecase implements UseCase<void, ElephantModel> {

    constructor(private elephantRepository: ElephantRepository) {}

    execute(params: void): Observable<ElephantModel> {
        return this.elephantRepository.getAllElephants();
    }
}
