
#!/bin/bash

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
minikube addons enable ingress 
kubectl get pods -n ingress-nginx
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx --watch