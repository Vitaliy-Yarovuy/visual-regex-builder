import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'highlight'})
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: RegExp): string {

    text = text.replace(new RegExp('<span class="highlight">', 'g'), '', );
    text = text.replace(new RegExp('</span>', 'g'), '', );

    return search ? text.replace(search, (match) => `<span class="highlight">${match}</span>`) : text;
  }
}
