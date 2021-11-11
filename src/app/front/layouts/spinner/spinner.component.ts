import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner = false;
  constructor(private SpinnerService: SpinnerService,
    private Ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.Init();
  }
  Init(){
    this.SpinnerService.getSpinnerOberver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.Ref.detectChanges();
    });
  }

}
