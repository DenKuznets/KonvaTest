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
    console.log(div);
    if (div) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      // создали сцену, указали контейнер для сцены
      var stage = new Konva.Stage({
        container: div,
        width: width,
        height: height,
      });
      // создали слой
      var layer = new Konva.Layer();
      // создали цветной квадрат
      var rect1 = new Konva.Rect({
        x: 20,
        y: 20,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
      });
      // add the shape to the layer
      layer.add(rect1);
      //
      var rect2 = new Konva.Rect({
        x: 150,
        y: 40,
        width: 100,
        height: 50,
        fill: 'red',
        shadowBlur: 10,
        cornerRadius: 10,
      });
      layer.add(rect2);

      var rect3 = new Konva.Rect({
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        fill: 'blue',
        cornerRadius: [0, 10, 20, 30],
      });
      layer.add(rect3);

      // add the layer to the stage
      stage.add(layer);
    }
  }
}
