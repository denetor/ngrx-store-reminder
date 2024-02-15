import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SidemenuComponent} from "./components/sidemenu/sidemenu.component";
import {Store, StoreModule } from '@ngrx/store';
import {AppState} from "./store/app.state";
import { viewPortActions} from "./store/viewport/viewport.actions";
import {selectViewPort} from "./store/viewport/viewport.selector";
import { Subscription } from 'rxjs';
import {selectMyself} from "./store/users/users.selector";
import {GetMyselfResponse} from "./store/users/users.models";
import {AuthService} from "./store/auth/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
        CommonModule,
        MatSidenavModule,
        NavbarComponent,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        SidemenuComponent,
    ],
    providers: [
        AuthService,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
    private subscription: Subscription = new Subscription();
    sideMenuOpened = true;
    myself: GetMyselfResponse | undefined;

    constructor(
        private readonly authService: AuthService,
        private readonly store: Store<AppState>,
    ) {}

    ngOnInit(): void {
        // observe screen size
        this.subscription.add(
            this.store.select(selectViewPort).subscribe(viewPortState => {
                this.sideMenuOpened = viewPortState ? viewPortState.isSmall != true : true;
            }),
        );
        // observe logged user data
        this.subscription.add(
            this.store.select(selectMyself).subscribe(myself => {
                this.myself = myself;
            }),
        );
        this.store.dispatch(viewPortActions.set.request({payload: {width: window.innerWidth}}));
        // verifica il token JWT giò nel localStorage
        this.authService.verifyToken();
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.store.dispatch(viewPortActions.set.request({payload: {width: window.innerWidth}}));
    }

    sideMenuToggle(): void {
        this.sideMenuOpened = !this.sideMenuOpened;
    }
}
