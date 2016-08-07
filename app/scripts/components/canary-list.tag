import _ from 'lodash';

<canarylist>
	<div class="list-group">
		<a role="button" each={ canaries } onclick={ select } class={ list-group-item-canari: true, list-group-item: true, active: selected }>{ title } </a>
	</div>

	<script>
		this.mixin('redux');
		this.mixin('router');

		this.select = function () {
			console.log('selected', this);
			if (!this.selected && !this.invalid) {
				this.routing.canary(this._item);
			}

			return false;
		};

		this.subscribe(state => { 
			return { 
				canaries: state.canaries
			};
		});
	</script>
</canarylist>