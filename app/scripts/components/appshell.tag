<appshell>
    <div class="row">
        <div class="col-md-4">
            <h4><i class="fa fa-heart"></i> Canaries</h4>
            <canarylist></canarylist>
        </div>

        <div class="col-md-8">
            <canarydetails></canarydetails>
        </div>
    </div>


    <script>
        this.mixin('redux');

        this.on('update', () => {

        });

        this.subscribe(state => {
            return {

            };
        });
    </script>
</appshell>