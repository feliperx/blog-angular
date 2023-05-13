import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {fakeData} from '../../data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  @Input() imageUrl: string = 'https://www.cbvl.esp.br/upload/post/default.jpg';
  @Input() title: string = 'Titulo';
  @Input() articleContent = 'Conteudo do artigo'
  private id:string | null ='0';

  constructor(
    private route: ActivatedRoute,
  ){

  }

  ngOnInit():void {
    this.route.paramMap.subscribe(
      value => this.id = value.get('id'));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = fakeData.filter(article => article.id === id)[0];


      this.imageUrl = result.imageUrl;
      this.title = result.title;
      this.articleContent = result.description;

  }
}
