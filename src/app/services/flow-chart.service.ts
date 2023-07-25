import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowChartService {
  public zoneDimensions$: BehaviorSubject<[number, number]> = new BehaviorSubject([0, 0])
  public data$: BehaviorSubject<any> = new BehaviorSubject(null)
  public dataChild$: BehaviorSubject<any> = new BehaviorSubject(null)
  public dataYoutubers$: BehaviorSubject<any> = new BehaviorSubject(null)

  public httpMockChildren: any = {
    flowChart: { //inicio con un solo nodo
      nodes: [{
        id: '01',
        label: 'nodo inicial',
        data: {
          title: 'INICIO',
          img: 'https://i.imgur.com/Rb27aIA.png',
          text: 'INICIO'
        },
        action: {
          more: 'Agregar',
          src: 'flowChart',
          key: 'childs'
        }
      }],
      links: [
        /* {
          id: 'a',
          source: 'first',
          target: 'c1',
          label: 'is parent of'
        }, */
      ]
    }
  }

  constructor() { }

  public calculateDimensions(el: HTMLElement): void {
    const { width, height } = el.getBoundingClientRect()
    this.zoneDimensions$.next([width - 5, height - 8])
  }

  public setDataFromChild(source: string): void {
    this.dataChild$.next(this.httpMockChildren[source])
  }

  public addChild(rootsrc: string, srcKey: string, childsrc: any): void {
    const newLinks = {
      id: '',
      source: srcKey,
      target: childsrc.id,
      label: ''
    }
    this.httpMockChildren[rootsrc].nodes.push(childsrc); //se agrega el objeto
    this.httpMockChildren[rootsrc].links.push(newLinks); //se vinculan de donde sale
    this.dataChild$.next(this.httpMockChildren[rootsrc]);
  }

}
