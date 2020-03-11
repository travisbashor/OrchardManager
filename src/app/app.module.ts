import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleDataService } from './apple-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppleDetailComponent } from './apple-detail/apple-detail.component';
import { ApplesComponent } from './apples/apples.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [AppComponent, AppleDetailComponent, ApplesComponent, DashboardComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(AppleDataService, { delay: 350 })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
