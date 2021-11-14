## WebdriverIO Docker + Kubernetes Demo
### Installation
1. Clone the Repository

``` 
git clone https://github.com/TamerlanG/wdio-v7-demo.git 
```

2. Install Dependencies
```` 
npm install 
````

### Running Tests
#### Docker
````
docker-compose up -d 
npm test
````

#### Kubernetes
First of all you have to setup a cluster with a minimum of 6GB of ram and 4 CPU    
````
minikube start --memory 6144 --cpus 4
kubectl create -f kubernetes
````
Next you will have to portforward our selinium hub to localhost. 
````
export PODNAME=`kubectl get pods --selector="app=selenium-hub" --output=template --template="{{with index .items 0}}{{.metadata.name}}{{end}}"`
kubectl port-forward $PODNAME 4444:4444
````
Once you have that done, you can run the tests using:
````
npm test
````