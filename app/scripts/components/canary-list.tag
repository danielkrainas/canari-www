import _ from 'lodash';
import { showCanary } from '../store/action-creators';

<canarylist>
	<h4><i class="fa fa-heart"></i> Canaries</h4>
	<div class="list-group">
		<a role="button" each={ canaries } onclick={ select } class={ list-group-item-canari: true, list-group-item: true, active: selected }>{ title } </a>
	</div>

	<script>
		this.mixin('redux');
		this.dispatchify({ showCanary });

		this.select = function () {
			if (!this.selected && !this.invalid) {
				this.showCanary(this._item);
			}
		};

		this.subscribe(state => { 
			return { 
				canaries: state.canaries
			};
		});
	</script>
</canarylist>