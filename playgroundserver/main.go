package main

import (
	"io"
	"net/http"

	"github.com/foomo/keel"
)

func main() {
	svr := keel.NewServer(
		keel.WithHTTPZapService(true),
		keel.WithHTTPViperService(true),
		keel.WithHTTPPrometheusService(true),
	)

	l := svr.Logger()

	svs := newService()

	svr.AddService(
		keel.NewServiceHTTP(l, "demo", ":8080", svs),
	)

	svr.Run()
}

func newService() *http.ServeMux {
	s := http.NewServeMux()
	s.HandleFunc("/", serve)
	return s
}

func serve(w http.ResponseWriter, r *http.Request) {
	//http.ListenAndServe(":3001", http.HandlerFunc(

	id := r.URL.Query().Get("id")
	if id == "" {
		http.Error(w, "no id get param given", http.StatusBadRequest)
		return
	}

	//resp, err := http.Get("https://goplay.tools/api/snippet/" + id)
	resp, err := http.Get("https://go.dev/_/share?id=" + id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "text/plain")
	io.Copy(w, resp.Body)
	resp.Body.Close()
}
