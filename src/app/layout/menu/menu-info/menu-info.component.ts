import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../model/menu.model';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MsgConfirmationComponent } from '../../../template/msg-confirmation/msg-confirmation.component';
import { MenuEditComponent } from '../menu-edit/menu-edit.component';
import { routerTransition } from '../../../router.animations';
import { MenuService } from '../../../providers/menu/menu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from '../../../providers/image/image.service';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.scss'],
  animations: [routerTransition()]
})
export class MenuInfoComponent implements OnInit {
  menu:Menu=new Menu();
  id:string;
  fileSrc:any;

  constructor(private imageService:ImageService,private toasterService:ToastrService,private modalService: NgbModal,private menuService:MenuService,private Route:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if(!params)return;
      this.id=params['id'];
      this.get();
    });    
  }
  get(){
    this.menuService.getById(this.id).subscribe(data=>{
      this.menu=data as Menu;
      console.log(this.menu);
      this.getImage();
    },
      err=>this.toasterService.error("Erreur inconnu"));
  }
  getImage(){
    this.fileSrc = this.imageService.getById(this.menu.photo);
  }
  open()
  {
    const modal: NgbModalRef = this.modalService.open(MenuEditComponent);
    (<MenuEditComponent>modal.componentInstance).menu = this.menu;
    (<MenuEditComponent>modal.componentInstance).this_this = this;
  }
  delete(){
    const modal: NgbModalRef = this.modalService.open(MsgConfirmationComponent);
    (<MsgConfirmationComponent>modal.componentInstance).this_this = this;
    (<MsgConfirmationComponent>modal.componentInstance).titre = "Suppression de menu";
    (<MsgConfirmationComponent>modal.componentInstance).message = "Voulez-vous supprimer ce menu ?";
  }
  action(){
    this.menuService.delete(this.menu.id).subscribe(data=>{
      this.Route.navigate(['menus']);
      alert("supprimer avec succès");
    },err=>alert("Erreur"));
    
    
  }

}
