import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen-github',
  templateUrl: './main-screen-github.component.html',
  styleUrls: ['./main-screen-github.component.scss']
})
export class MainScreenGithubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ul: any = document.getElementById('ul-github')

    function getApiGitHub(){
      fetch('https://api.github.com/users/darimus/repos')
        .then(async res => {

          if(!res.ok) {
            console.log(res)
          }

          var data = await res.json()

          data.map((item: { name: string; url: any; created_at: string | number | Date; avatar_url: any;}) => {
            let li = document.createElement('li');
            
            li.innerHTML = `
              <img src=${item.avatar_url} style= "width=300 heith=300">
              <strong>${item.name.toUpperCase()}</strong>
              <span>URL: ${item.url}</span>
              <span>Data Criação:
                ${Intl.DateTimeFormat('pt-BR')
                  .format(new Date(item.created_at))}
              </span>
            `
            ul.appendChild(li)
          })

        }).catch(e => console.log(e))
    }

    getApiGitHub()
  }

}
