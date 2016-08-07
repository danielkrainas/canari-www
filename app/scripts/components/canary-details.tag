/*
		return [{
			id: '42304232-ef60-47b6-a293-117a618636ae',
			ttl: 1000,
			updated_at: 1470457077120,
			title: 'Mock Canary',
			message: 'Lalalala this is the message',
			labels: ['warrant','privacy'],
			signature: '',
			pubkey: '',
			pubkey_url: ''
		}];
*/

<canarydetails>
	<ol class="breadcrumb">
		<li><i class="fa fa-heart"></i> canaries</li>
		<li>{ canary.id }</li>
	</ol>

	<div class="alert alert-block alert-warning" show={ canary.$local.dead }>
		<i class="fa fa-exclamation-triangle"></i> Sorry, <strong>{ canary.title }</strong> is no longer valid.</a>.
	</div>

	<div>
		<h3><i class="fa fa-square"></i> { canary.title }</h3>
		<dl>
			<dt>Status</dt>
			<dd class={ 'text-success': canary.$local.alive, 'text-danger': canary.$local.dead }>
				<i class{ fa: true, 'fa-check': canary.$local.alive, 'fa-ban': canary.$local.dead }></i> { canary.$local.status }
			</dd>

			<dt>Time to live</dt>
			<dd>{ canary.$local.ttl }</dd>

			<dt>Last updated</dt>
			<dd>{ canary.$local.updated_at }</dd>
		</dl>

		<h4>Labels</h4>
		<p class="label-list">
			<a class="label label-canari" each={ canary.$local.labels }>{ title }</a>
		</p>
		<hr />

		<section show={ canary.pubkey || canary.pubkey_url }>
			<h5>Public Key</h5>
			<pre show={ canary.pubkey } class="well well-default">{ canary.pubkey }</pre>
			<p show={ canary.pubkey_url }><i class="fa fa-link"></i> <a href={ canary.pubkey_url } target="_blank">{ canary.pubkey_url }</a></p>
		</section>

		<section class="panel panel-default">
			<div class="panel-heading"><i class="fa fa-envelope"></i> Message</div>
			<div class="panel-body">
				<pre>{ canary.message }</pre>
				<div show={ canary.signature }>
					<hr />
					<h5>Signature</h5>
					<pre>{ canary.signature }</pre>
				</div>
			</div>
		</section>
	</div>

	<script>
		this.mixin('redux');

		this.subscribe(state => {
			return { canary: state.selected };
		})
	</script>
</canarydetails>