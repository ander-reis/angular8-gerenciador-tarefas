import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef = null) {
  }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }
}