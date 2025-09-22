import { Routes , RouterModule } from '@angular/router';
import { Meals } from './components/meals/meals';
import { CategoryMeals } from './components/category-meals/category-meals';
import { Home } from './components/home/home';
import { MealDetails } from './components/meal-details/meal-details';
import { NotFound } from './components/not-found/not-found';
import { Favourits } from './components/favourits/favourits';
import { FeaturedSlider } from './components/featured-slider/featured-slider';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { AuthGuard } from './gaurds/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'meals', component: Meals },
    { path: 'category/:name', component: CategoryMeals },
    { path: 'meal/:id', component: MealDetails },
    {path: 'favourits', component: Favourits},
    {path: 'categories', component: FeaturedSlider},
    { path: 'login', component: Login, canActivate: [AuthGuard] },
    { path: 'register', component: Register, canActivate: [AuthGuard] },
    { path: 'dashboard', component: Dashboard },
    { path: '**', component: NotFound }

];
