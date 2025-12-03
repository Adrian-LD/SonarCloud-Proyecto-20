Local Mongo for running server tests

Use this local Mongo instance to run the server test suite locally and avoid mongodb-memory-server binary issues.

Start a Mongo container (detached):

```bash
docker run -d --name punctualo-test-mongo -p 27017:27017 mongo:6
```

Run tests using that Mongo instance (sets unique DB name per worker):

```bash
# run a single worker (useful for debugging)
VITEST_WORKER_ID=1 TEST_MONGO_URI="mongodb://localhost:27017" TEST_DB_NAME="Puntualo_test_1" npm run test:coverage

# or run with multiple workers (the test setup will append worker id automatically):
TEST_MONGO_URI="mongodb://localhost:27017" npm run test:coverage
```

Stop and remove the container when done:

```bash
docker stop punctualo-test-mongo && docker rm punctualo-test-mongo
```

Notes:
- On some systems `mongodb-memory-server` cannot start its bundled mongod because
  the host is missing `libcrypto.so.1.1` (OpenSSL 1.1). Using Docker avoids this.
- CI now supports running with a `mongo` service; the test setup will create per-worker
  DB names (e.g. `Puntualo_test_1`) to avoid parallel-worker collisions.
