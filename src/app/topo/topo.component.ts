import { Component, OnInit,OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { ALBUM, CAROUSEL, MENU } from '../shared/banco-mock';
import { Carousel } from '../shared/carousel.model';
import { Menu } from '../shared/menu.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit,OnChanges {
  public carousels:Carousel[] = CAROUSEL
  public menus:Menu[] = MENU
  public albuns:Carousel[] = ALBUM
  public redimensionar:boolean = true
  public innerWidth: any;

  public email:string = ""

  constructor() {
    console.log(this.email)
   }
  ngOnChanges(changes: SimpleChanges): void 
  {
    console.log("modificou");
  }

  ngOnInit() {
    this.verificaResize(window.innerWidth)
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verificaResize(window.innerWidth)
  }
    //(<HTMLInputElement>texto.target).value RETORNA O TEXTO CONTIDO DENTRO DO TEXTAREA
  public exibirTexto(texto:Event):void
  {
    this.email = (<HTMLInputElement>texto.target).value
    console.log(this.email)
  }
  public verificaResize(size:number) 
  {
    console.log(size)
    if (size < 770)
    {
      this.redimensionar = false
    }
    else if (size > 770) {
      this.redimensionar = true
    }
  }
}
