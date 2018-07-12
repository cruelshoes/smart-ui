import {observable, computed} from "mobx";

let sampleProblems = [
	{
		DC: 'DC_DELHI',
		"rankedImpacts": [
                    {
                        "entityId": "SERVICE-1A48E04435043B08",
                        "entityName": "com.hybris.datahub:datahub-webapp:6.6.0.1-RC2 - 2018.02.13-00:10-UTC (/datahub-webapp)",
                        "severityLevel": "ERROR",
                        "impactLevel": "SERVICE",
                        "eventType": "FAILURE_RATE_INCREASED"
                    }
        ]
	},
	{
		DC: 'DC_DELHI',
		"rankedImpacts": [
                    {
                        "entityId": "SERVICE-1A48E04435043B08",
                        "entityName": "com.hybris.datahub:datahub-webapp:6.6.0.1-RC2 - 2018.02.13-00:10-UTC (/datahub-webapp)",
                        "severityLevel": "ERROR",
                        "impactLevel": "SERVICE",
                        "eventType": "FAILURE_RATE_INCREASED"
                    }
        ]
	},
	{
		DC: 'DC_DELHI',
		"rankedImpacts": [
                    {
                        "entityId": "SERVICE-1A48E04435043B08",
                        "entityName": "com.hybris.datahub:datahub-webapp:6.6.0.1-RC2 - 2018.02.13-00:10-UTC (/datahub-webapp)",
                        "severityLevel": "ERROR",
                        "impactLevel": "SERVICE",
                        "eventType": "FAILURE_RATE_INCREASED"
                    }
        ]
	},
	{
		DC: 'DC_BOSTON',
		"rankedImpacts": [
                    {
                        "entityId": "SERVICE-1A48E04435043B08",
                        "entityName": "com.hybris.datahub:datahub-webapp:6.6.0.1-RC2 - 2018.02.13-00:10-UTC (/datahub-webapp)",
                        "severityLevel": "ERROR",
                        "impactLevel": "SERVICE",
                        "eventType": "FAILURE_RATE_INCREASED"
                    }
        ]
	},
	{
		DC: 'DC_BOSTON',
		"rankedImpacts": [
                    {
                        "entityId": "SERVICE-1A48E04435043B08",
                        "entityName": "com.hybris.datahub:datahub-webapp:6.6.0.1-RC2 - 2018.02.13-00:10-UTC (/datahub-webapp)",
                        "severityLevel": "ERROR",
                        "impactLevel": "SERVICE",
                        "eventType": "FAILURE_RATE_INCREASED"
                    }
        ]
	},
	{
		DC: 'DC_FRANKFURT',
		"rankedImpacts": [
                    {
                        "entityId": "SERVICE-1A48E04435043B08",
                        "entityName": "com.hybris.datahub:datahub-webapp:6.6.0.1-RC2 - 2018.02.13-00:10-UTC (/datahub-webapp)",
                        "severityLevel": "ERROR",
                        "impactLevel": "SERVICE",
                        "eventType": "FAILURE_RATE_INCREASED"
                    }
        ]
	}
];


class Problems{
	@observable problems = [...sampleProblems];

	constructor(problems){
		this.problems = problems;
	}

	@computed filterByDC(dc){
		return this.problems.filter(i => i.DC === dc);
	}
}

export default Problems;