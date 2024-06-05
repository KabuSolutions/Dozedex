import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './App/Components/App/app.component';
import { config } from './App/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
