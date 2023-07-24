import { FlowChartService } from './../../services/flow-chart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-card-node',
  templateUrl: './flow-card-node.component.html',
  styleUrls: ['./flow-card-node.component.css']
})
export class FlowCardNodeComponent implements OnInit {
  @Input() dataIn: any;
  constructor(private flowChartService: FlowChartService) { }

  ngOnInit(): void {
  }

  callChilds(src: string, action: string): void {
    switch (action) {
      case 'youtubers':
        this.flowChartService.setDataYoutubers(src)
        break;
      default:
        this.flowChartService.setDataFromChild(src)
        break
    }

  }

  addNode(srcKey: string): void {
    //generar models
    const newNode = {
      id: Math.floor(Math.random() * 10),
      label: 'Nodo4',
      data: {
        title: 'FRIJOLES 🤘',
        img: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
        text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web.'
      },
      action: {
        more: 'Agregar',
        src: 'flowChart',
        key: 'childs'
      }
    }
    this.flowChartService.addChild('flowChart', srcKey, newNode)
  }

}