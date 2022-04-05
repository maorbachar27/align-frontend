import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-image-upper-view',
  templateUrl: './image-upper-view.component.html',
  styleUrls: ['./image-upper-view.component.scss'],
})
export class ImageUpperViewComponent implements OnInit {
  @Input() selectedImage: ImageModel;
  constructor() {}

  ngOnInit(): void {}
}
