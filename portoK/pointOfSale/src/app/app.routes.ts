import { Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { SplashComponent } from './splash/splash.component';
import { ClientPageComponent } from './hub/client-page/client-page.component';
import { InventoryComponent } from './hub/inventory/inventory.component';
import { BillingComponent } from './hub/billing/billing.component';
import { DayEndComponent } from './hub/day-end/day-end.component';

export const routes: Routes = [
    { path: '', component: SplashComponent },
  {

    
    path: 'hub', component: HubComponent, children: [

      {
        path: '', component: ClientPageComponent
      },

      {
        path: 'clientss', component: ClientPageComponent
      },
      {
        path: 'inventory', component: InventoryComponent
      },
      {
        path: 'billing', component: BillingComponent
      },
      {
        path: 'day_end', component: DayEndComponent
      },
      
    
    
    
    ]
  }
];
