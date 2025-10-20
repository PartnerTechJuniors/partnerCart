import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Icon404 } from '@icons/icon404/icon404';

@Component({
  selector: 'app-notfound',
  imports: [Icon404, RouterLink],
  templateUrl: './notfound.html'
})
export class Notfound {
  location = inject(Location);

  goBack(){
    this.location.back();
  }
}
