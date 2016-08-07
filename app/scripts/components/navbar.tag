import { showGallery } from '../store/action-creators';

<navbar>
    <nav class="navbar navbar-fixed-top navbar-canari">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" role="button" onclick={ home }>Canari</a>
            </div>
        </div>
    </nav>

    <script>
        this.mixin('redux');
        this.dispatchify({ showGallery });

        this.home = () => this.showGallery() && false;
    </script>
</navbar>