<canarydetails>
	<ol class="breadcrumb">
		<li><i class="fa fa-heart"></i> canaries</li>
		<li>{ canary.title }</li>
	</ol>

	<div class="alert alert-block alert-warning" show={ canary.ttl < 0 }>
		<i class="fa fa-exclamation-triangle"></i> Sorry, <strong>{ canary.name }</strong> is no longer valid.</a>.
	</div>

	<div hide={ canary.ttl < 0 }>
		<h4><i class="fa fa-blocks"></i> { canary.title }</h4>
		<hr />
	</div>

	<script>
		this.mixin('redux');

		this.subscribe(state => {
			return { canary: state.selected };
		})
	</script>
</canarydetails>