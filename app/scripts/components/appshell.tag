import { ROUTE_CANARY, ROUTE_GALLERY } from '../router';

<appshell>
    <canarylist show={ view === ROUTE_GALLERY }></canarylist>
    <canarydetails show={ view === ROUTE_CANARY }></canarydetails>

    <script>
        this.mixin('redux');

        this.subscribe(state => {
            return {
                view: state.route.name
            };
        });
    </script>
</appshell>