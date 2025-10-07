# Todo App

## 1.6
Start the cluster with `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`
Deploy with `kubectl apply -f manifests/` to deploy `service.yaml` and `deployment.yaml`
Check that `Hello world` is visible via `http://localhost:3000/` in the browser