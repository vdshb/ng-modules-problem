import {Injectable, ModuleWithProviders, NgModule} from '@angular/core';

@Injectable()
export class CounterService {
  private counter = 0;

  shot() {
    return this.counter++;
  }
}

export interface CounterModuleBuilder {
  instanceId(instanceId: string): CounterModuleBuilder;
  build(): ModuleWithProviders;
}

@NgModule()
export class CounterModule {
  private static CounterModuleBuilderImpl = class {
    private counterProviderToken: any = CounterService;

    instanceId(instanceId: string): CounterModuleBuilder {
      this.counterProviderToken = instanceId;
      return this;
    }

    build(): ModuleWithProviders {
      return {
        ngModule: CounterModule,
        providers: [{
          provide: this.counterProviderToken,
          useClass: CounterService
        }]
      };
    }
  };

  static builder(): CounterModuleBuilder {
    return new CounterModule.CounterModuleBuilderImpl();
  };

}
