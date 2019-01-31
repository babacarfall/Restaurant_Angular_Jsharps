import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $;

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  @Input()dataTableResult: any;
  @Input('add')add:boolean=false;
  @Output('click_add')click_add = new EventEmitter<any>();
  searching = false;
  constructor() { }

  ngOnInit() {
  }
  activefilter() {
    this.searching = !this.searching;
    if(!this.searching)this.dataTableResult.search('').draw();
  }
  addclick() {
    this.click_add.emit();
  }
  public filterGlobal(): void {
    this.dataTableResult.search(
      $('#global_filter').val()
    ).draw();
  }
  exportpdf() {
    this.dataTableResult.button('.buttons-print').trigger();
  }
  exportexcel() {
    this.dataTableResult.button('.buttons-excel').trigger();
  }
}
