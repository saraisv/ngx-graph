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
  ngOnInit(): void {  }

  public addNode(srcKey: string): void {
    const newNode = {
      id: Math.floor(Math.random() * Date.now()).toString(36),
      label: 'nodo',
      data: {
        title: 'FRIJOLES 🤘',
        img: '',
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