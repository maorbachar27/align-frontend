export class ImageModel {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;

  constructor(obj: ImageModel) {
    const { id, author, width, height, url, download_url } = obj;
    this.id = id;
    this.width = width;
    this.height = height;
    this.url = url;
    this.download_url = download_url;
  }
}
