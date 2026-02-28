import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'admin/login', component: AdminLoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];
