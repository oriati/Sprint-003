import Home             from './pages/home.vue';
import Emails           from './pages/emails.vue';
import Events           from './pages/events.vue';
import EventDetails     from './events/event-details.vue';
import Places           from './pages/places.vue';



export default [
    {path: '/', component: Home},
    {path: '/email', component: Emails},
    {path: '/event', component: Events},
    {path: '/event/:id', component: EventDetails},
    {path: '/place', component: Places},
    // {path: '/email', component: Emails, children: [
    //     {path: '', component: CarCenter},
    //     {path: 'edit', component: CarEdit},
    //     {path: ':id/edit', component: CarEdit},
    //     {path: ':id', component: CarDetails},
    // ]},
    {path: '*', redirect: '/'}

]
