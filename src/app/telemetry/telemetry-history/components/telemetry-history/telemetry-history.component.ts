import { Component, OnInit, ViewChild } from '@angular/core';
import { TelemetryHistoryService } from '../../services/telemetry-history.service';
import { TelemetryHistory } from '../../interfaces/telemetry-history';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { TelemetryActionDialogComponent } from 'src/app/telemetry/telemetry-action-dialog/components/telemetry-action-dialog/telemetry-action-dialog.component';

import { RocketSearchService } from 'src/app/rocket/rocket-search/services/rocket-search.service';

@Component({
  selector: 'app-telemetry-history',
  templateUrl: './telemetry-history.component.html',
  styleUrls: ['./telemetry-history.component.css']
})
export class TelemetryHistoryComponent implements OnInit {
  displayedColumns: string[] = ['rocket_name', 'stage_name', 'engine_name', 'thrust', 'isp', 'timestamp', 'action'];
  dataSource = new MatTableDataSource<TelemetryHistory>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private telemetryService: TelemetryHistoryService,
    private dialog: MatDialog,
    private rocketSearchService: RocketSearchService 
    
    ) {}

  ngOnInit(): void {
    // Get the selected rocket and stage
     const selected = this.rocketSearchService.getSelectedRocketAndStage();
     console.log("selected", selected)
     // Use the fetched rocket and stage or default to hardcoded values if null
     const rocketCode = selected?.rocket.code || 'rocket1';
     const stageCode = selected?.stage.code || 'stage1';
 
    this.telemetryService.getProcessedTelemetryData(rocketCode, stageCode).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

       // Move these two lines here
       this.dataSource.sort.active = 'timestamp';
       this.dataSource.sort.direction = 'asc';  

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openActionDialog(element: TelemetryHistory): void {

    const dialogRef = this.dialog.open(TelemetryActionDialogComponent, {
      data: {
          telemetry: element
      }
  });

    dialogRef.afterClosed().subscribe(result => {
        if(result) {
            // Handle the action when the user confirms in future.
        }
    });

  }

  //unit testing
  getBackgroundColorForThrust(thrust: number): string {
    return thrust > 10 ? 'bg-green-600' : 'default-bg';
  }
  
}
