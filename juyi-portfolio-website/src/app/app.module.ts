import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { JuyiComponent } from './juyi/juyi.component';
import { MechanicalEngineerComponent } from './mechanical-engineer/mechanical-engineer.component';
import { ElectricalEngineerComponent } from './electrical-engineer/electrical-engineer.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { DesignerComponent } from './designer/designer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    JuyiComponent,
    MechanicalEngineerComponent,
    ElectricalEngineerComponent,
    ProgrammerComponent,
    DesignerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
