import { AfterViewInit, Component, Input } from '@angular/core';
import { WidgetDataInterface } from '../../widget.interface';
import { GiphyDataService, GiphyImage } from './giphy-data.service';

@Component({
  selector: 'app-widget-giphy',
  template: `
    <small>Giphy</small>
      <video *ngIf="image"
             [src]="image.mp4"
             #videoPlayer
             autoplay
             loop
             muted
             playsinline>
          <img  [src]="image.url">
      </video>
  `,
  styleUrls: ['./widget-giphy.component.scss'],
  providers: [GiphyDataService]
})
export class WidgetGiphyComponent implements AfterViewInit {
  public image: GiphyImage;

  private images: [GiphyImage];
  private sub: any;
  private currentImageIndex = 0;
  private started = false;

  @Input() data: WidgetDataInterface;

  constructor(private giphyDataService: GiphyDataService) {}

  private loadImages() {
    this.giphyDataService.get(this.data.params.q).subscribe(images => {
      this.images = images;

      if (!this.started) {
        this.setImage();
      }
    });
  }

  private setImage(): void {
    if (this.sub) {
      clearTimeout(this.sub);
    }
    this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    this.image = this.images[this.currentImageIndex];
    this.sub = setTimeout(() => this.setImage(), 1000 * 15);
  }

  ngAfterViewInit() {
    this.loadImages();
  }
}
