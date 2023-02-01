import { Lista } from 'src/app/models/lista.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCompletado'
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[] , completada: boolean = true ): Lista[] {

    return listas.filter(lista => lista.terminada === completada)


  }

}
