import {Component, Inject} from '@angular/core';
import {CounterService} from './counter.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-modules-shots';

  constructor(
    @Inject('main.CountService')  mainCounter: CounterService,
    @Inject('integration.CountService')  integrationCounter: CounterService,
  ) {
    integrationCounter.shot();
    integrationCounter.shot();
    integrationCounter.shot();
    this.title = '' + integrationCounter.shot() + ' ' + mainCounter.shot();
  }

}
