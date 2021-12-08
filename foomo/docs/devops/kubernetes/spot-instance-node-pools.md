---
sidebar_label: Spot Instance Node Pools
---
# Spot Instance Node Pools

Setting up spot instance node pools is a great way to save money on stateless applications

## Setting Up Node Taints

## Setting Up Pod Toleration

## Setting Up Pod Disruption Budgets

Setting up a pod disruption budget is important due to erratic node shutdown possibility.
What could happen is that nodes that are hosting the applications start terminating, and our application becomes 
unresponsive until the application is re-located to another node.
To avoid that situation, for the instances we need to configure pod disruption budget on our helm deployments.

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: application-name
spec:
  maxAvailable: 50%
  selector:
    matchLabels:
      app: application-name

```

For more details check out [here](https://kubernetes.io/docs/tasks/run-application/configure-pdb/)
## Setting Up Termination Handling

## Setting Up K8s Cron Shutdown Cleanup

