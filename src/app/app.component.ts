import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { interval, of, Subscription, timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ImageModel } from './models/image.model';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'align';
  selectedImage: ImageModel;
  pagination: { page: number; limit: number } = { page: 1, limit: 5 };

  timerSubscription: Subscription;
  imagesObservable: Observable<ImageModel[]>;

  REFRESH_IMAGE_TIME: number = 30000;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.timerSubscription = timer(0, this.REFRESH_IMAGE_TIME)
      .pipe(
        map(() => {
          this.pagination.page++;

          this.imagesObservable = this.getImages(
            this.pagination.page,
            this.pagination.limit
          );
        })
      )
      .subscribe();
  }

  next() {
    this.pagination.page++;
    this.imagesObservable = this.getImages(
      this.pagination.page,
      this.pagination.limit
    );
  }

  prev() {
    if (this.pagination.page > 1) {
      this.pagination.page--;
      this.imagesObservable = this.getImages(
        this.pagination.page,
        this.pagination.limit
      );
    }
  }

  getImages(page: number, limit: number): Observable<ImageModel[]> {
    return this.httpService.get(`images?page=${page}&limit=${limit}`);
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
