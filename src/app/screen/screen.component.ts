import { AfterViewInit, Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss',
})
export class ScreenComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let div = document.querySelector('div');
    if (div) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      // создали сцену, указали контейнер для сцены
      var stage = new Konva.Stage({
        container: div,
        width: width,
        height: height,
      });
      // создали слой
      var layer = new Konva.Layer();

      let cx = width / 2;
      let cy = height / 2;
      let spline = new Konva.Line({
        points: [cx, cy - 100, cx + 50, cy, cx, cy + 100],
        stroke: 'black',
        strokeWidth: 7,
        tension: 0.5,
        closed: true,
        id: 'a',
      });
      let spline2 = new Konva.Line({
        points: [cx, cy - 150, cx + 50, cy, cx, cy + 100],
        stroke: 'black',
        strokeWidth: 7,
        tension: 0.5,
        closed: true,
        id: 'a',
      });

      layer.add(spline);
      layer.add(spline2);

      // add the layer to the stage
      stage.add(layer);
    }
  }
}
