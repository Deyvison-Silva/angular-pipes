import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let result = '';

    values.map(data => result += this.capitalize(data) + ' ');

    // for (let v of values) {
    //   result += this.capitalize(v) + ' ';
    // }
    return result;
  }

  capitalize(value: string) {
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
/*
  Criando um pipe manualmente com o angular cli
   - Um pipe deve conter o Decoretor @Pipe e dentre do mesmo deve conter o atributo name que é como o mesmo vai ser chamado
   - O mesmo necessita do implements 'PipeTransform' na classe
   - E tbm necessita da função transform que é responsável por receber o valor e os argumentos para retornar o valor tratado pelo seu pipe 
*/