import { Component, OnInit, ViewChild } from '@angular/core';
import { _DATA2 } from '../_data';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
declare var $;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dataTableResult: any;
  dtOptions: any;
  title = 'Une liste';
  data = _DATA2;
  searching = false;
  constructor(private route: Router) {

  }

  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTableResult = this.dataTable.DataTable({
      data: this.data,
      columns: [
        {
          data: 'reference',
          render: function (data, type, full) {
            if (full.pro) {
              return data + ` <div class="label pro">PRO</div>`;
            }
            return data;
          }
        },
        { data: 'ville' },
        { data: 'client' },
        { data: 'aidemenagere' },
        {
          data: 'duree',
          render: function (data, type, full) {
            return `<div class="td-align-center">` + new Date(data).getTime() + `</div>`;
          }
        },
        {
          data: 'abonnee',
          render: function (data, type, full) {
            if (data) {
              return `<div class="td-align-center"><i class="fa fa-check-circle"></id></div>`
              + `<div class="hidden">` + data + `</div>`;
            }
            return `<div class="hidden">` + data + `</div>`;
          }
        },
        {
          data: 'etat',
          render: function (data, type, full) {
            return `<div class="label etat ` + data + `"> ` + data + `</div>`;
          }
        },
        {
          data: 'note',
          render: function (data, type, full) {
            return `<div class="td-align-center">` + data + `</div>`;
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
    this.redirection(this.dataTableResult, [1, 0, 2, 3, 10], this.route);
  }

  // contient le tableau et les colonnes cliquable
  public redirection(table, columns: any[], route: Router) {
    this.dataTable.on('click', 'td', function() {
      const cellData: {row: string, column: string} = table.cell(this)[0][0];
      if (columns.findIndex((val) => val === cellData.column) < 0) {
      return;
      }
      const id = table.data()[cellData.row].id;
      console.log(table.column(1));
      console.log(id);
     // route.navigate(['clients/'+id])
    });
  }

}
