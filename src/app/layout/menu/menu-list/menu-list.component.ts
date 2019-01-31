import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MenuService } from '../../../providers/menu/menu.service';
import { Router } from '@angular/router';
import { Menu } from '../../../model/menu.model';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuAddComponent } from '../menu-add/menu-add.component';
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  animations: [routerTransition()]
})
export class MenuListComponent implements OnInit {

  constructor(private menuService:MenuService,private route:Router,private toasterService:ToastrService, 
    private modalService: NgbModal) { }
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  add=true;
  title = 'Une liste';
  data: Menu[] = [];
  dataTableResult: any;
  dataa:Menu[]=[];
  ngOnInit(): void {
    this.data=this.dataa;
    this.get();
    this.initTable();
    console.log(this.data);
  }
  get() {
    this.menuService.getAll().subscribe(data=>{
      this.data = data;
      console.log(this.data);
     this.dataTable.DataTable().clear();
     this.dataTable.DataTable().rows.add(data);
     this.dataTable.DataTable().draw();
    },
    err=>this.toasterService.error("Liste","Erreur inattendue"));
  }
  open(){
    const modal: NgbModalRef = this.modalService.open(MenuAddComponent);
    (<MenuAddComponent>modal.componentInstance).this_this=this;;
  }

  initTable(){
    this.dataTable = $(this.table.nativeElement);
    this.dataTableResult = this.dataTable.DataTable({
      data: this.data,
      columns: [
        {
          data: 'typeplat',
          render: function (data, type, full) {
            if(data!=null)
              return ` <a class="cursor-pointer">` + data.nom + `</a>`;
            else 
            return ` <a class="cursor-pointer">` + `</a>`; 
          }
        },
        {
          data: 'plat',
          render: function (data, type, full) {
              return ` <a class="cursor-pointer">` + data + `</a>`;
          }
        },
        {
          data: 'prix',
          render: function (data, type, full) {
              return ` <a class="cursor-pointer">` + data + `</a>`;
          }
        },
        { data: 'createdAt',
        render:  function(data, type, full) {
          let da:Date= new Date(data);
          //const date = `${data.values[2]}-${data.values[1]}-${data.values[0]} ${data.hourOfDay}:${data.minuteOfHour}`;
          return `${da.getDate()}-${da.getMonth()+1}-${da.getUTCFullYear()} ${da.getHours()}:${da.getMinutes()}`;
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
    this.redirection(this.dataTableResult, [0], this.route);
  }
  
  public redirection(table, columns: any[], route: Router) {
    const th =this;
    this.dataTable.on('click', 'td', function() {
      const cellData: {row: string, column: string} = table.cell(this)[0][0];
      const id = table.data()[cellData.row].id;
      route.navigate(['menus/info', id]);
    });
  }

}
