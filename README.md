# NextJS Rewrites Break CORS

## Problem

When using rewrites, we expect endpoints to be able to handle CORS, but nextjs does custom CORS handling

## Reproduction

1. Run `yarn run next dev` inside this repo
2. Run the curl command below:

```
curl -v 'http://localhost:3000/api' \                                       
  -X 'OPTIONS' \
  -H 'Origin: http://localhost:3000'
```

3. Look at server logs. If the endpoint was executed, you would have seen `nextjs will never log this line with OPTIONS and an Origin header`
in the server console
