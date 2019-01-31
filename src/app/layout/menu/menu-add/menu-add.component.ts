import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../model/menu.model';
import { MenuService } from '../../../providers/menu/menu.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { TypePlat } from '../../../model/type-plat.model';
import { routerTransition } from '../../../router.animations';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { ImageService } from '../../../providers/image/image.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss'],
  animations: [routerTransition()]
})
export class MenuAddComponent implements OnInit {
  menu:Menu=new Menu();
  this_this:any;
  typeplat:any;
  typeplats:TypePlat[]=[];
  filedata:File;
  filename:any;
  valide=false;
  file:any;
  constructor(public activeModal: NgbActiveModal,private typeplatService:TypePlatService,
    private imageService:ImageService, private menuservice: MenuService,private toasterService: ToastrService) { }

  ngOnInit() {
    this.getTypePlat();
  }
  add(addForm: NgForm) {
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
    
    if(this.filedata!=null){
      this.valide=true;
      this.imageService.add(this.filename).subscribe(data=>{
        this.menu.photo=data.body;
        if(this.menu.photo!=null)
        this.saveMenu(this.menu);
      },err=>{console.log(err);this.valide=false;});
    }
    else {
      this.saveMenu(this.menu);
    }
    
  }
  saveMenu(menu:Menu){
    this.menuservice.add(this.menu).subscribe(data=>{
      this.this_this.get();
      this.activeModal.close('Close click');
      this.toasterService.success("Ajout Plat","Le plat a été ajouté avec succès");
    },
      err=>{this.toasterService.error("error");this.valide=false;console.log(err);}
      );
  }
  getTypePlat(){
    this.typeplatService.getAll().subscribe(data=>this.typeplats=data as TypePlat[],
      err=>{this.toasterService.success("erreur","erreur inconnu");console.log(err);})
  }
  onFileChanged(event) {
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.filename = event.target.files[0];
      reader.onload = (event) =>{
        let eve:any=event.target;
        this.filedata = eve.result;
      }
    }
    else{
    this.filedata=null;
      this.filename="";
  }
  }
}
