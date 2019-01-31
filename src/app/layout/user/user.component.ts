import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from '../../providers/user/user.service';
import { Utilisateur as User } from '../../model/user.model';
import { Router } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../../providers/session/session.service';
import { MsgConfirmationComponent } from '../../template/msg-confirmation/msg-confirmation.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'user-role',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  add = true;
  dtOptions: any;
  title = 'Une liste';
  data: User[] = [];
  dataTableResult: any;
  constructor(private userService: UserService, private route: Router, private toasterService: ToastrService,
    private modalService: NgbModal, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.get();
    this.initTable();
  }

  get() {
    this.userService.getAll().subscribe(data => {
      this.data = data;
      this.dataTable.DataTable().clear();
      this.dataTable.DataTable().rows.add(data);
      this.dataTable.DataTable().draw();
    },
      err => this.toasterService.error("Liste", "Erreur inattendue"));
  }
  initTable() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTableResult = this.dataTable.DataTable({
      data: this.data,
      columns: [
        {
          data: 'username',
          render: function (data, type, full) {
            return ` <a class="cursor-pointer">` + data + `</a>`;
          }
        },
        {
          data: 'createdAt',
          render: function (data, type, full) {
            let da:Date= new Date(data);
            return `${da.getDate()}-${da.getMonth()+1}-${da.getUTCFullYear()} ${da.getHours()}:${da.getMinutes()}`;  
          }
        },
        {
          data: 'id',
          render: function (data, type, full) {
            return '<button class="btn btn-danger btn-xs">' + 'supprimer' + '</button>'
          }
        }
      ],
      language: {
        'url': '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
      },
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
    const th = this;
    this.dataTable.on('click', 'td', function () {
      const cellData: { row: string, column: string } = table.cell(this)[0][0];
      const data: User = table.data()[cellData.row];
      if (cellData.column == "2") {
        th.delete(data.id);
      }
      else
        th.edit(data);
    });
  }
  open() {
    const modal: NgbModalRef = this.modalService.open(UserAddComponent);
    (<UserAddComponent>modal.componentInstance).this_this = this;
  }
  public delete(id: string) {
    const modal: NgbModalRef = this.modalService.open(MsgConfirmationComponent);
    (<MsgConfirmationComponent>modal.componentInstance).this_this = this;
    (<MsgConfirmationComponent>modal.componentInstance).data = id;
    (<MsgConfirmationComponent>modal.componentInstance).titre = "Suppression d'utilisateur";
    (<MsgConfirmationComponent>modal.componentInstance).message = "Voulez-vous supprimer cet utilisateur ?";
  }
  public action(id: string) {
    this.userService.delete(id).subscribe(data=>{
      this.get();
      this.toasterService.success("Suppression utilisateur","Utilisateur supprimer avec succès");
    },
    err=>this.toasterService.error("Erreur","Impossible de supprimer l'utilisateur"));
  }
  public edit(data: User) {
    const modal: NgbModalRef = this.modalService.open(UserEditComponent);
    (<UserEditComponent>modal.componentInstance).user = data;
    (<UserEditComponent>modal.componentInstance).this_this = this;
  }
}