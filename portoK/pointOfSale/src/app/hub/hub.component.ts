import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection } from '@angular/fire/firestore';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }


  toClient() {
    this.router.navigate(['clientss'], {relativeTo:this.route});

  };
  toInventory() {
    this.router.navigate(['inventory'], {relativeTo:this.route});

  }

  toBilling() {
    this.router.navigate(['billing'], {relativeTo:this.route});

  }

  toDayEnd() {
    this.router.navigate(['day_end'], {relativeTo:this.route});

  }

}
