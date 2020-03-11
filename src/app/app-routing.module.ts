import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplesComponent } from './apples/apples.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppleDetailComponent } from './apple-detail/apple-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'apples', component: ApplesComponent },
    { path: 'apples/:id', component: AppleDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
