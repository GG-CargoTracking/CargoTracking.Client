import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadComponent: () => import("./layout/layout.component"),
        children: [
            {
                path: "",
                loadComponent: () => import("./pages/home/home.component")
            },
            {
                path: "cargos",
                loadComponent: () => import("./pages/cargos/cargos.component")
            }
        ]
    }
];
