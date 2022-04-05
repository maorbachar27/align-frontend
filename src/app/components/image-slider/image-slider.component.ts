import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../../models/image.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() images: Observable<ImageModel[]>;
  @Input() selectedImage: ImageModel;
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onPrev: EventEmitter<any> = new EventEmitter();
  @Output() onSelectImage: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.images.pipe(first()).subscribe((data) => {
      this.onSelectImage.emit(data[0]);
    });
  }

  ngOnInit(): void {}
}
