import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { PublicationsComponent } from './publications/publications.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'education', component: EducationComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'publications', component: PublicationsComponent}
];
