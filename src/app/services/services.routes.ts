import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'civil-construction', loadComponent: () => import('../services/civil-construction/civil-construction.component').then(mod => mod.CivilConstructionComponent ) },
    { path: 'interior-designing', loadComponent: () => import('../services/interior-designing/interior-designing.component').then(mod => mod.InteriorDesigningComponent) },
    { path: 'architecture', loadComponent: () => import('../services/architecture/architecture.component').then(mod => mod.ArchitectureComponent) },
    { path: 'water-proofing', loadComponent: () => import('../services/water-proofing/water-proofing.component').then(mod => mod.WaterProofingComponent) },
    { path: 'cost-estimation', loadComponent: () => import('../services/evaluation/evaluation.component').then(mod => mod.EvaluationComponent) },
    { path: 'consultancy', loadComponent: () => import('../services/consultancy/consultancy.component').then(mod => mod.ConsultancyComponent) }
];