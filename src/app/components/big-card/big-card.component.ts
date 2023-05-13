import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() id:string = '0';
  @Input() imageUrl:string = 'https://www.cbvl.esp.br/upload/post/default.jpg';
  @Input() date:string = 'Data';
  @Input() title:string = 'Titulo';
  @Input() description:string = 'Descricao';
}
