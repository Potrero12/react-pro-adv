import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 }  from '../01-lazyload/pages';
import NoLazy from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element;

interface Route {
    to  : string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

//implemeta el lazyload
const LazyLayout = lazy(() => import( /* webpackChunkName: "lazyPage1"*/ '../01-lazyload/Layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy-1 dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

]