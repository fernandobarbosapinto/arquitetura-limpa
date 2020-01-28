import { UseCase } from '../base/use-case';
import { ElephantRepository } from '../repositories/elephant.repository';
import { Observable } from 'rxjs';
import { ElephantModel } from '../domain/elephant.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetElephantByIdUsecase implements UseCase<number, ElephantModel> {

    constructor(private elephantRepository: ElephantRepository) {}

    execute(params: number): Observable<ElephantModel>{
        return this.elephantRepository.getElephantById(params);
    }
}
