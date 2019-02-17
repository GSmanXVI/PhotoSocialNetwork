import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  profiles: Profile[];

  constructor(
    private profile: ProfileService
  ) { }

  async ngOnInit() {
    this.profiles = await this.profile.getProfiles();
  }

}
