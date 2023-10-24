import {Component} from '@angular/core';

import {PoMenuItem, PoToolbarAction, PoToolbarProfile} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus: Array<PoMenuItem> = [];
  profile: PoToolbarProfile = Object.create(null);
  profileActions: PoToolbarAction[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.configureProfile();

    this.configureProfileActions();

    this.createMenu();
  }

  private configureProfileActions() {
    this.profileActions = [
      {
        label: 'logout',
        action: AppComponent.logout(),
      },
    ];
  }

  private configureProfile() {
    const user = {
      "id": "Guilherme",
      "tenant": "0cbb0533-1f57-41bd-902f-49070aa54bab",
      "login": "guilhermeo.souza@totvs.com.br",
      "name": "Guilherme",
      "email": "guilhermeo.souza@totvs.com.br"
    }
    if (user) {
      this.profile.title = user.name;
      this.profile.subtitle = user.email;
    }
  }

  private createMenu() {
    this.menus = [];

    this.menus.push({
      label: "Extratos",
      link: 'extract',
      icon: 'po-icon-finance',
      shortLabel: "Extratos",
    });

    this.menus.push({
      label: "Transferência",
      link: 'transfers',
      icon: 'po-icon-handshake',
      shortLabel: "Transferir",
    });

  }

  private static logout() {
    return undefined;
  }
}
