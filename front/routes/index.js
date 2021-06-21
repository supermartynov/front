import VueRouter from 'vue-router'
import MainPage from "@/components/MainPage";
import CurrentSpecialty from "@/components/CurrentSpecialty";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/specialties/:id',
            name: 'specialties',
            component: CurrentSpecialty,

        }

    ]
})
