import { Component } from '@angular/core';
import { ElephantModel } from 'src/app/core/domain/elephant.model';
import { GetAllElephantUsecase } from 'src/app/core/usecases/get-all-elephant.usecase';

@Component({
  selector: 'app-elephant-card-list',
  templateUrl: './elephant-card-list.component.html',
  styleUrls: ['./elephant-card-list.component.css']
})
export class ElephantCardListComponent {

  elephants: Array<ElephantModel>

  constructor(private getAllElephants: GetAllElephantUsecase) { }

  updateElephants() {
    this.elephants = [];
    this.getAllElephants.execute(null).subscribe((value: ElephantModel) => {
      this.elephants.push(value);
    });
  }

  onSelect(event) {
    console.log(event.target);
  }

}
