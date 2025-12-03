// Test setup: carga variables de entorno y configuración compartida
import '../config';

// Si estamos en entorno de test, arrancar una instancia de Mongo en memoria
// para que las pruebas se puedan ejecutar sin una instalación local de mongod.
// Vitest carga este archivo antes de las pruebas (ver vitest.config.ts -> setupFiles)
import { MongoMemoryServer } from 'mongodb-memory-server';
import { beforeAll, afterAll } from 'vitest';

let mongod: MongoMemoryServer | null = null;

beforeAll(async () => {
	// If TEST_MONGO_URI is already provided (e.g. you're running a local/docker mongod),
	// don't start an in-memory instance. This avoids issues on systems missing
	// libcrypto/OpenSSL versions required by the downloaded mongod binary.
	if (process.env.NODE_ENV === 'test') {
		const providedTestUri = process.env.TEST_MONGO_URI;
		// Decide a per-worker DB name suffix to avoid collisions when multiple
		// Vitest workers run against the same Mongo service in CI.
		const workerId = process.env.VITEST_WORKER_ID || String(process.pid);
		const baseTestDb = process.env.TEST_DB_NAME || 'Puntualo_test';
		// Always set a worker-specific TEST_DB_NAME so each worker uses an isolated DB.
		process.env.TEST_DB_NAME = `${baseTestDb}_${workerId}`;

		// If TEST_MONGO_URI is provided and the caller also provided a TEST_DB_NAME,
		// treat that as an explicit request to use the system Mongo (for example
		// when running a local `mongo:6` container). Otherwise, when the URI is
		// the generic localhost default coming from `.env.test`, prefer the
		// in-memory instance for isolation.
		const explicitDbProvided = !!process.env.TEST_DB_NAME;
		if (providedTestUri && (providedTestUri !== 'mongodb://localhost:27017' || explicitDbProvided)) {
			// Use the provided TEST_MONGO_URI (no in-memory mongo needed)
			// eslint-disable-next-line no-console
			console.info('[test-setup] Using existing TEST_MONGO_URI, skipping in-memory MongoDB')
			// inform which DB name will be used
			// eslint-disable-next-line no-console
			console.info(`[test-setup] Using TEST_DB_NAME=${process.env.TEST_DB_NAME}`)
			return
		}

		mongod = await MongoMemoryServer.create();
		const uri = mongod.getUri();
		// Exponer la URI para que connectDB la use (usa process.env.TEST_MONGO_URI)
		process.env.TEST_MONGO_URI = uri;
		// Asegurar nombre de BD de test por defecto
		process.env.TEST_DB_NAME = process.env.TEST_DB_NAME || 'Puntualo_test';
		// Informativo
		// eslint-disable-next-line no-console
		console.info('[test-setup] Started in-memory MongoDB for tests')
	}
});

afterAll(async () => {
	if (mongod) {
		await mongod.stop();
		// eslint-disable-next-line no-console
		console.info('[test-setup] Stopped in-memory MongoDB')
		mongod = null;
	}
});

// Añade aquí otros mocks o configuración global adicional para las pruebas
