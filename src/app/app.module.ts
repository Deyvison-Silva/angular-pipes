import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pt';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'pt' }
    SettingsService,
    { provide: LOCALE_ID, deps: [SettingsService], useFactory: (settingService: any) => settingService.getLocale() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
Temos duas formas de realizar a internacionalização da aplicação a primeira mais simples onde colocamos o valor estatico
E a segunda onde obtemos o valor do locale através de um serviço, podendo assim executar alguma lógica antes de aplicar
a internacionalização
*/
