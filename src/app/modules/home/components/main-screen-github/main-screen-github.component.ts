import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../service/github.service';

@Component({
  selector: 'app-main-screen-github',
  templateUrl: './main-screen-github.component.html',
  styleUrls: ['./main-screen-github.component.scss']
})
export class MainScreenGithubComponent implements OnInit {

  public getAllRepositorys: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.listRepos.subscribe(res => {
      this.getAllRepositorys = res;
      console.log(this.getAllRepositorys)
    });
  }
}
