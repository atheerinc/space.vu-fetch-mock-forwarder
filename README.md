fetch-mock-forwarder is intended to be used as a "replacement" for isomorphic-fetch to be used by fetch-mock so that modules may still import `isomorphic-fetch` assuming that it has been aliased to this project.

This may be done in webpack as such:

    resolve: {
        alias: {
            'isomorphic-fetch': 'fetch-mock-forwarder'
        }
    }

In reality, all this package does is require `whatwg-fetch` and then calls the `fetch` function available on the global object.
