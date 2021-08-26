import { ViewChild, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FlowShapeModel,
  NodeModel,
  ConnectorModel,
  OrthogonalSegmentModel
} from "@syncfusion/ej2-angular-diagrams";

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagramComponent implements OnInit {

  @ViewChild("diagram")
  public terminator?: FlowShapeModel;
  public process?: FlowShapeModel;
  public decision?: FlowShapeModel;
  public preDefinedProcess?: FlowShapeModel;
  public segment1?: OrthogonalSegmentModel;
  public segment2?: OrthogonalSegmentModel;
  public nodeDefaults(node: NodeModel): NodeModel {
    node.height = 50;
    node.width = 140;
    node.offsetX = 300;
    return node;

  }

  public connectorDefaults(obj: ConnectorModel): ConnectorModel {
    obj.type = "Orthogonal";
    obj.targetDecorator = { shape: "Arrow", width: 10, height: 10 };
    return obj;
      }
      ngOnInit(): void {
    this.terminator = { type: 'Flow', shape: 'Terminator' };
    this.process = { type: 'Flow', shape: 'Process' };
    this.decision = { type: 'Flow', shape: 'Decision' };
    this.preDefinedProcess = { type: 'Flow', shape: 'PreDefinedProcess' };
    this.segment1 = [{ length: 30, direction: "Right" }, { length: 300, direction: "Bottom" }];
    this.segment2 = [{ length: 30, direction: "Left" }, { length: 200, direction: "Top" }];
      }
}
