import { Component, OnInit } from '@angular/core';
import {SliderService} from '../../services/slider.service';
import {Slider} from '../../models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders: Slider;

  error: string;

  constructor(public sliderService: SliderService) {

   }

  ngOnInit() {

    this.sliderService.getSliders().subscribe(
      (data: Slider) => this.sliders = data,
      error => this.error = error
      );

  }

}
