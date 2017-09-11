import { Component, NgZone, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {MdSidenav, MdSidenavModule} from '@angular/material';
import {Router, RouterModule} from '@angular/router';
import { Expense, ExpenseService } from '../../services';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {
  showShadow = true;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  expenses: Expense[];
  constructor(private _router: Router,
    private expenseService: ExpenseService,
    zone: NgZone) {
    // TODO(josephperrott): Move to CDK breakpoint management once available.
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
    this.expenseService.getExpenses().subscribe(resultFromExpense => {
      this.expenses = resultFromExpense;
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
