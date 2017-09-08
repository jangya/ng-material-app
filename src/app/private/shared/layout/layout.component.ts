import { Component, NgZone, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {MdSidenav, MdSidenavModule} from '@angular/material';
import {Router, RouterModule} from '@angular/router';

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
  
  constructor(private _router: Router,
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
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
