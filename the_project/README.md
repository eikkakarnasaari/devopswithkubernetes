# Todo App

## 1.5
Deploy with `kubectl apply -f manifests/deployment.yaml`
Check deployment with e.g. `kubectl port-forward todo-app-dep-75f9778b8f-9d4pz 3000:4000`
Check that `Hello world` is visible via `http://localhost:3000/` in the browser