import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { ElephantMockRepository } from './data/repository/elephant-mock-repository/elephant-mock-repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DataModule,
    PresentationModule
  ],
  providers: [
    {provide: ElephantRepository, useClass: ElephantMockRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
