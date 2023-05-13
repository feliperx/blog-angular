import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input() id:string = '0';
  @Input() imageUrl:string='https://www.cbvl.esp.br/upload/post/default.jpg';
  @Input() title:string = 'Titulo';
  @Input() date:string = 'data';

}
