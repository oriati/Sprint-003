import Home             from './pages/home.vue';
import Emails           from './pages/emails.vue';
import Events           from './pages/events.vue';
import EventDetails     from './events/event-details.vue';
import EventEdit        from './events/event-edit.vue';
import Places           from './pages/places.vue';



export default [
    {path: '/', component: Home},
    {path: '/email', component: Emails},
    {path: '/event', component: Events},
    {path: '/event/edit', component: EventEdit},
    {path: '/event/edit', component: EventEdit},
    {path: '/event/:id', component: EventDetails},
    {path: '/event/:id/edit', component: EventEdit},
    {path: '/place', component: Places},
    // {path: '/email', component: Emails, children: [
    //     {path: '', component: CarCenter},
    //     {path: 'edit', component: CarEdit},
    //     {path: ':id/edit', component: CarEdit},
    //     {path: ':id', component: CarDetails},
    // ]},
    {path: '*', redirect: '/'}

]
