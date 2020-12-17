import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData, pipeModifier): unknown {
    return pipeData.filter(item => item.name.toLowerCase().includes(pipeModifier) || item.reknown.toLowerCase().includes(pipeModifier));
  }

}
