import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PumpgtmApi implements ICredentialType {
	name = 'pumpgtmApi';

	displayName = 'PumpGTM API';

	icon = 'file:../nodes/Pumpgtm/pumpgtm.svg' as const;

	documentationUrl = 'https://pumpgtm.com/docs/api';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Your workspace key from the API key page in PumpGTM (starts with eve_mcp_)',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.pumpgtm.com/api/v1',
			url: '/workspaces',
		},
	};
}
