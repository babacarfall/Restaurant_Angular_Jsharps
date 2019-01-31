import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-type-plat',
  templateUrl: './type-plat.component.html',
  styleUrls: ['./type-plat.component.scss'],
  animations: [routerTransition()]
})
export class TypePlatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
