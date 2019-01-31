import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { Router } from '@angular/router';
import { TypePlat } from '../../../model/type-plat.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MsgConfirmationComponent } from '../../../template/msg-confirmation/msg-confirmation.component';
import { TypePlatEditComponent } from '../type-plat-edit/type-plat-edit.component';
import { TypePlatAddComponent } from '../type-plat-add/type-plat-add.component';
import { SessionService } from '../../../providers/session/session.service';
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'app-type-plat-list',
  templateUrl: './type-plat-list.component.html',
  styleUrls: ['./type-plat-list.component.scss'],
  animations: [routerTransition()]
})
export class TypePlatListComponent implements OnInit {

  constructor(private typeplatService:TypePlatService,
    private route:Router,
    private toasterService:ToastrService, 
    private modalService: NgbModal,private sessionService:SessionService) { }
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  add=true;
  title = 'Une liste';
  data: TypePlat[] = [];
  dataTableResult: any;
  ngOnInit(): void {
    this.get();
    this.initTable();
  }

  get() {
    this.typeplatService.getAll().subscribe(data=>{
      this.data = data;
     this.dataTable.DataTable().clear();
     this.dataTable.DataTable().rows.add(data);
     this.dataTable.DataTable().draw();
    },
    err=>this.toasterService.error("Liste","Erreur inattendue"));
  }
  initTable(){
    this.dataTable = $(this.table.nativeElement);
    this.dataTableResult = this.dataTable.DataTable({
      data: this.data,
      columns: [
        {
          data: 'nom',
          render: function (data, type, full) {
              return ` <a class="cursor-pointer">` + data + `</a>`;
          }
        },
        { data: 'createdAt',
        render:  function(data, type, full) {
          let da:Date= new Date(data);
          return `${da.getDate()}-${da.getMonth()+1}-${da.getUTCFullYear()} ${da.getHours()}:${da.getMinutes()}`;
        }
      },
      { data: 'id',
      render:  function(data, type, full) {
        return ` <button class="btn btn-danger btn-xs">supprimer</button>`;
      }
    }
      ],
      language: this.sessionService.getlanguetable(),
      'pagingType': 'full',
      'lengthChange': false,
      'searching': true,
      pageLength: 20,
      dom: 'Bfrtip',
      buttons: [
        {
          extend: 'print',
        },
        {
          extend: 'excel',
        }
      ]
    });
    this.redirection(this.dataTableResult);
  }
  
  public redirection(table) {
    const th =this;
    this.dataTable.on('click', 'td', function() {
      const cellData: {row: string, column: string} = table.cell(this)[0][0];
      const data:TypePlat = table.data()[cellData.row];
      if(cellData.column=="2"){
        th.delete(data.id);
      }
      else
      th.edit(data);
    });
  }
  open(){
    const modal: NgbModalRef = this.modalService.open(TypePlatAddComponent);
    (<TypePlatAddComponent>modal.componentInstance).this_this = this;
  }

  public delete(id:string){
    const modal: NgbModalRef = this.modalService.open(MsgConfirmationComponent);
    (<MsgConfirmationComponent>modal.componentInstance).this_this = this;
    (<MsgConfirmationComponent>modal.componentInstance).data = id;
    (<MsgConfirmationComponent>modal.componentInstance).titre = "Suppression de type de plat";
    (<MsgConfirmationComponent>modal.componentInstance).message = "Voulez-vous supprimer ce type de plat ?";
  }
  public action(id:string){
    this.typeplatService.delete(id).subscribe(data=>{
      this.toasterService.success("Suppression Type plat","Type plat supprimer avec succès");
      this.get();
    },
      err=>this.toasterService.error("Echec","Impossible de supprimer, erreur inattendue"));
  }
  
  public edit(data:TypePlat){
    const modal: NgbModalRef = this.modalService.open(TypePlatEditComponent);
    (<TypePlatEditComponent>modal.componentInstance).typeplat = data;
    (<TypePlatEditComponent>modal.componentInstance).this_this = this;
  }
}
