import _ from 'lodash';
<canarylist>
	<div class="list-group">
		<a role="button" each={ canaries } class={ list-group-item: true, active: selected }>{ title } </a>
	</div>

	<script>
		this.mixin('redux');

		this.subscribe(state => { 
			return { 
				canaries: state.canaries
			};
		});
	</script>
</canarylist>