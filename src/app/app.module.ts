import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagementComponent} from './management/management.component';
import { AboutusintroductionComponent } from './aboutusintroduction/aboutusintroduction.component';
import { QualitypolicyComponent } from './qualitypolicy/qualitypolicy.component';
import { HseComponent } from './hse/hse.component';
import { ClientsComponent } from './clients/clients.component';
import { PdofferingsComponent } from './pdofferings/pdofferings.component';
import { PdprojectsComponent } from './pdprojects/pdprojects.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductIntroductionComponent } from './product-introduction/product-introduction.component';
import { ProductAdvantagesComponent } from './product-advantages/product-advantages.component';
import { BffloorplanComponent } from './bffloorplan/bffloorplan.component';
import { BfspecComponent } from './bfspec/bfspec.component';
import { BflocationComponent } from './bflocation/bflocation.component';
import { BfpicturesComponent } from './bfpictures/bfpictures.component';
import { BfsiteprogressComponent } from './bfsiteprogress/bfsiteprogress.component';
import { ServiceComponent } from './service/service.component';
import { EpcServiceComponent } from './epc-service/epc-service.component';
import { EpcProjectsComponent } from './epc-projects/epc-projects.component';
import { EquipmentmacComponent } from './equipmentmac/equipmentmac.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomeComponent,
    AboutusComponent,
    ManagementComponent,
    AboutusintroductionComponent,
    QualitypolicyComponent,
    HseComponent,
    ClientsComponent,
    PdofferingsComponent,
    PdprojectsComponent,
    ProductDetailsComponent,
    ProductIntroductionComponent,
    ProductAdvantagesComponent,
    BffloorplanComponent,
    BfspecComponent,
    BflocationComponent,
    BfpicturesComponent,
    BfsiteprogressComponent,
    ServiceComponent,
    EpcServiceComponent,
    EpcProjectsComponent,
    EquipmentmacComponent,
    ProductsComponent,
    ContactComponent,
    MediaComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'',pathMatch:'full',redirectTo:'landingpage' },
      { path:'pagenotfound',component:PagenotfoundComponent},
      { path:'landingpage',component:LandingpageComponent, 
      children:[
        { path:'',pathMatch:'full',redirectTo:'home'},
        { path:'home',component:HomeComponent},
        { path:'about_us',component:AboutusComponent,
      children:[
        { path:'',pathMatch:'full',redirectTo:'aboutusintroduction'},
        { path:'aboutusintroduction',component:AboutusintroductionComponent},
        { path:'management',component:ManagementComponent},
        { path:'qualitypolicy',component:QualitypolicyComponent},
        { path:'hse',component:HseComponent},
        { path:'clients',component:ClientsComponent},
        { path:'bfsiteprogress',component:BfsiteprogressComponent}
       

      ]},
      { path:'pdofferings',component:PdofferingsComponent},
      { path:'pdprojects',component:PdprojectsComponent},
      { path:'product-details',component:ProductDetailsComponent,
     children:[
       { path:'',pathMatch:'full',redirectTo:'product-introduction'},
       { path:'product-introduction',component:ProductIntroductionComponent},
       { path:'product-advantages',component:ProductAdvantagesComponent},
       { path:'bffloorplan',component:BffloorplanComponent},
       { path:'bfspec',component:BfspecComponent},
       { path:'bflocation',component:BflocationComponent},
       { path:'bfpictures',component:BfpicturesComponent},
       { path:'bfsiteprogress',component:BfsiteprogressComponent}
     ]
    },
    { path:'epc-service',component:EpcServiceComponent},
    { path:'epc-projects',component:EpcProjectsComponent},
    { path:'equipmentmac',component:EquipmentmacComponent},
    { path:'service',component:ServiceComponent},
    { path:'products',component:ProductsComponent},
    { path:'contact',component:ContactComponent},
    { path:'media',component:MediaComponent}
      ]},

     
       ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
