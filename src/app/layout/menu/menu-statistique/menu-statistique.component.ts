import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Menu } from './../../../model/menu.model';
import { TypePlat } from './../../../model/type-plat.model';
import { TypePlatService } from '../../../providers/type-plat/type-plat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-menu-statistique',
    templateUrl: './menu-statistique.component.html',
    styleUrls: ['./menu-statistique.component.scss'],
    animations: [routerTransition()]
})
export class MenuStatistiqueComponent implements OnInit {
    @Input() menus: Menu[];
    typeplats: TypePlat[];

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public data: number[] = [350, 450, 100];
    public dataLabel: string[] = [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6'
    ];

    initData() {
        this.data = [];
        this.data.splice(0);
    this.dataLabel.splice(0);
        for (let typeplat of this.typeplats) {
            let nombre: number = 0;
            for (let menu of this.menus)
                if (menu.typeplat.id.includes(typeplat.id))
                    nombre++;
            this.data.push(nombre);
            this.dataLabel.push(typeplat.nom);
        }
    }
    getTypePlat() {
        this.typeplatService.getAll().subscribe(data => {
            this.typeplats = data as TypePlat[];
            this.initData();
        },
            err => this.toasterService.error("Liste", "Erreur inattendue"));
    }
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    constructor(private typeplatService: TypePlatService, private toasterService: ToastrService) {

        this.getTypePlat();
    }

    ngOnInit() {
        this.getTypePlat();
    }

}
