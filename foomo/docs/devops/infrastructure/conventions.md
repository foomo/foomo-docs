---
sidebar_label: Conventions
---
# Conventions

When creating resources the most important thing is to be consistent.

# Resource Naming Conventions

The following resource convention is preferred if no other exist in the project:

```[customer]<-project>-[resource]-[env]-[name]<-region/location><-index>```

Where [] represents a required field while <> is an optional field.

Legend:

	customer:          bestbytes, foomo
	project:           hmd
	reqource:          s3, pql, vpc
	env:               prod, stage, dev, int, test
	name:              default, general, catalogue-backend
	region/location:   region for this resource if it's region specific
    index:             numbering of the resource, starting from 1 (3 numbers, leading zeros)


Examples:

    # Foomo customer s3 bucket for prod environment with the described role (catalogue-backend/site-images)
	foomo-s3-prod-NAME

		- foomo-s3-prod-catalogue-backend
		- foomo-s3-prod-site-images

    # Foomo customer VPC for stage environment with the described role (default/mongodb)
	foomo-vpc-stage-NAME

		- foomo-vpc-stage-default
		- foomo-vpc-stage-mongodb

    # Bestbytes customer for HMD project, postgresql instance for stage environment and default usage
	bestbytes-hmd-pql-stage-default
        
    # Bestbytes customer VPN Tunnel #1 in the stage environment for externalcustomer with numbering
    bestbytes-vpt-stage-externalcustomer-001