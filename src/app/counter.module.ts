import {Injectable, ModuleWithProviders, NgModule} from '@angular/core';

@Injectable()
export class CounterService {
  private counter = 0;

  shot() {
    return this.counter++;
  }
}

@NgModule()
export class CounterModule {
  static withConfig(name?: string): ModuleWithProviders {
    return {
      ngModule: CounterModule,
      providers: [{
        provide: name,
        useClass: CounterService
      }]
    };
  }
}
