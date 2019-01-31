import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../model/menu.model';
import { TypePlat } from '../../../model/type-plat.model';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../../router.animations';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../../providers/menu/menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss'],
  animations: [routerTransition()]
})
export class MenuEditComponent implements OnInit {
  menu:Menu=new Menu();
  this_this:any;
  typeplat=-1;
  typeplats:TypePlat[]=[{id:"1",createdAt:"12",nom:"Africain"},
  {id:"2",createdAt:"12",nom:"Marocain"},
  {id:"3",createdAt:"12",nom:"Bresilien"}];
  valide=true;
  constructor(public activeModal: NgbActiveModal,private typeplatService:TypePlatService,
     private menuservice: MenuService,private toasterService: ToastrService) { }

  ngOnInit() {
    this.getTypePlat();
  }
  update(updateForm: NgForm) {
    if(this.typeplat==-1){
      this.toasterService.error("Veuillez selectionner un type de plat");
      return;
    }
    if(this.menu.plat==null||this.menu.plat==""){
      this.toasterService.error("Veuillez saisir le nom du plat");
      return;
    }
    if(this.menu.desc==null||this.menu.desc==""){
      this.toasterService.error("Veuillez saisir la description du menu");
      return;
    }
    if(this.menu.desc.length<10){
      this.toasterService.error("Le nombre de caractère de la description doit être supérieur à 10");
      return;
    }
    
    this.menu.typeplat = this.typeplats[this.typeplat];
    this.saveMenu(this.menu);
    
    
  }
  saveMenu(menu:Menu){
    this.valide=false;
    this.menuservice.add(this.menu).subscribe(data=>{
      this.this_this.get();
      this.activeModal.close('Close click');
      this.toasterService.success("Modification Plat","Le plat a été modifié avec succès");
    },
      err=>{this.toasterService.error("error");this.valide=true;}
      );
  }
  getTypePlat(){
    this.typeplatService.getAll().subscribe(data=>this.typeplats=data as TypePlat[],
      err=>this.toasterService.success("erreur","erreur inconnu"))
  }

}
