import { Routes } from '@angular/router';
import { SplashScreenComponent } from './Components/splash-screen/splash-screen.component';

export const routes: Routes = [ 
    {
        path: '',
        component: SplashScreenComponent,
        title: 'Splash Screen'
    }
];


export default routes;