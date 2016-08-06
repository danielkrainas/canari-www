import store from 'store2';

const CANARIES_KEY = 'v1.canaries';

export default class LocalCanary {
	constructor() {

	}

	static getAll() {
		//return store.get(CANARIES_KEY) || [];
		return [{
			id: '42304232-ef60-47b6-a293-117a618636ae',
			ttl: 60000,
			updated_at: 1470457077120,
			title: 'Mock Canary',
			message: 'Lalalala this is the message',
			labels: ['warrant','privacy'],
			signature: '',
			//pubkey: 'ssh-rsa\nAAAAB3NzaC1yc2EAAAABJQAAAQEAj1WG3y7RWolnrY8RE8AtHaFm+UoBCCJS2JWm6/q0JAnob/v6CgORKt1hSxik+omoPdaVbt/USZBugy7D3CtccxtujlU51p1MwYcK59drFGAQ2K0HGKQqcINUPUBp7XL9OlYSoY8wKaA+0mTMnI+1T9z1tmWUxTiPnxb8sd/x+CSBF+giwNOHPOC/97ot1nLBgPFdUtWrUdx023X0qKZrQLZWb4xtvl/CTH5MW6QJLp7BQoC7havBBPMnzGKDOdEeHSUMR4AiHfo4mIXgnr224/86x/XsrCec/YrRCv+1tBWZm/Mj6MTqEEmhy1lT5ypVWr4O+MNuatuoKWavoI/gTQ==',
			pubkey_url: 'https://github.com/danielkrainas.keys'
		}];
	}
}