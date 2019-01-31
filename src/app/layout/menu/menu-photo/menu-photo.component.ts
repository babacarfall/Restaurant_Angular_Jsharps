import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ImageService } from '../../../providers/image/image.service';

@Component({
  selector: 'app-menu-photo',
  templateUrl: './menu-photo.component.html',
  styleUrls: ['./menu-photo.component.scss'],
  animations: [routerTransition()]
})
export class MenuPhotoComponent implements OnInit {
  @Input("photo")photo:string;
  photoSrc:string;
  constructor(private imageService:ImageService) { 
    this.get();}

  ngOnInit() {
    this.get();
  }
  get(){
  }


}
