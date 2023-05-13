import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() imageUrl: string = 'https://www.cbvl.esp.br/upload/post/default.jpg';
  @Input() title: string = 'Titulo';
  @Input() articleContent = 'Conteudo do artigo'
}
