import { Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { SplashComponent } from './splash/splash.component';
import { ClientPageComponent } from './hub/client-page/client-page.component';
import { InventoryComponent } from './hub/inventory/inventory.component';

export const routes: Routes = [
    { path: '', component: SplashComponent },
  {

    
    path: 'hub', component: HubComponent, children: [

      {
        path: '', component: ClientPageComponent
      },

      {
        path: 'dash', component: ClientPageComponent
      },
      
    
    
    
    ]
  }
];
